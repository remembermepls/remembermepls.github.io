// 초성 영화 퀴즈: 관리자 페이지와 참가자 페이지가 함께 쓰는 설정과 도구.
// ※ 이 파일에는 영화 제목이 들어 있지 않습니다. 참가자 페이지는 이 파일만 불러오므로
//   페이지 소스를 열어 봐도 정답을 알 수 없고, 관리자가 보낸 '초성'만 받습니다.
//   (정답 공개를 누르면 그때 제목이 전송됩니다.)

window.CS = (() => {
  // 실시간 중계 서버(ntfy.sh, 무료·가입 불필요)와 채널 이름.
  // 채널 이름을 아는 사람은 누구나 메시지를 보낼 수 있으니, 바꾸고 싶으면 아무도 모를 문자열로 바꾸세요.
  const RELAY = "https://ntfy.sh";
  const TOPIC = "chosung-movie-civf5q2f0lu9";

  const CHO = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  const SYLLABLE = /[가-힣]/;

  // "어벤져스: 엔드게임" → "ㅇㅂㅈㅅ: ㅇㄷㄱㅇ" (한글 외 글자·공백은 그대로 둔다)
  const toChosung = s => [...String(s).normalize("NFC")]
    .map(ch => {
      const c = ch.charCodeAt(0) - 0xAC00;
      return c >= 0 && c < 11172 ? CHO[Math.floor(c / 588)] : ch;
    })
    .join("").replace(/\s+/g, " ").trim();

  // 정답 비교용: 띄어쓰기·문장부호·대소문자 무시
  const norm = s => String(s).normalize("NFC").toLowerCase().replace(/[^0-9a-zㄱ-ㆎ가-힣]/g, "");

  // 참가자가 입력한 답을 확인할 수 있도록 제목 대신 해시만 보낸다.
  const hash = async (nonce, title) => {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${nonce}|${norm(title)}`));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  };
  const canHash = !!(window.crypto && crypto.subtle);

  const newNonce = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  // 두 페이지가 주고받는 메시지 형식:
  //   { t: "q", q: 문제번호, c: 초성, h: 정답 해시 }   문제 출제
  //   { t: "a", q: 문제번호, title }                    정답 공개
  //   { t: "c" }                                         화면 비우기
  const isStr = (v, max) => typeof v === "string" && v.length > 0 && v.length <= max;
  const parseMsg = raw => {
    try {
      const m = JSON.parse(raw);
      if (m.t === "c") return { t: "c" };
      // 초성에 완성된 한글 글자가 섞여 있으면 받지 않는다(참가자 화면에는 초성만 나오도록).
      if (m.t === "q" && isStr(m.q, 24) && isStr(m.c, 60) && !SYLLABLE.test(m.c))
        return { t: "q", q: m.q, c: m.c, h: /^[0-9a-f]{64}$/.test(m.h) ? m.h : null };
      if (m.t === "a" && isStr(m.q, 24) && isStr(m.title, 80)) return { t: "a", q: m.q, title: m.title };
    } catch (e) {}
    return null;
  };

  // 지난 메시지들로부터 현재 상태 계산
  const EMPTY = { q: null, c: null, h: null, title: null };
  const reduceState = (state, msg) => {
    if (!msg) return state;
    if (msg.t === "c") return EMPTY;
    if (msg.t === "q") return { q: msg.q, c: msg.c, h: msg.h, title: null };
    if (msg.t === "a" && msg.q === state.q) return { ...state, title: msg.title };
    return state;
  };

  // 채널 구독: 처음 접속하면 최근 12시간 기록으로 현재 상태를 맞추고, 그 뒤로는 실시간으로 받는다.
  // onMsg(msg, isLive), onStatus("live" | "connecting" | "offline")
  const subscribe = (onMsg, onStatus) => {
    const base = `${RELAY}/${encodeURIComponent(TOPIC)}`;
    let es = null, lastId = null, retry = 1000;

    const handle = (data, live) => {
      let ev;
      try { ev = JSON.parse(data); } catch (e) { return; }
      if (ev.event !== "message") return;
      lastId = ev.id;
      onMsg(parseMsg(ev.message), live);
    };

    const connect = () => {
      onStatus("connecting");
      es = new EventSource(`${base}/sse${lastId ? `?since=${encodeURIComponent(lastId)}` : ""}`);
      es.onopen = () => { retry = 1000; onStatus("live"); };
      es.onmessage = e => handle(e.data, true);
      es.onerror = () => {
        es.close();
        onStatus("offline");
        setTimeout(connect, retry);
        retry = Math.min(retry * 2, 15000);
      };
    };

    fetch(`${base}/json?poll=1&since=12h`)
      .then(r => (r.ok ? r.text() : ""))
      .then(text => text.split("\n").filter(Boolean).forEach(line => handle(line, false)))
      .catch(() => {})
      .finally(connect);
  };

  const publish = msg =>
    fetch(`${RELAY}/${encodeURIComponent(TOPIC)}`, { method: "POST", body: JSON.stringify(msg) })
      .then(r => { if (!r.ok) throw Object.assign(new Error(`HTTP ${r.status}`), { status: r.status }); });

  const statusText = s => s === "live" ? "실시간 연결됨" : s === "connecting" ? "연결 중…" : "재연결 중…";

  return { toChosung, norm, hash, canHash, newNonce, parseMsg, reduceState, EMPTY, subscribe, publish, statusText };
})();
