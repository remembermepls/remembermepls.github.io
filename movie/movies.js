// 이모지 영화 맞추기: 관리자 페이지와 참가자 페이지가 함께 쓰는 설정과 문제 목록.

// 실시간 중계 서버(ntfy.sh, 무료·가입 불필요)와 채널 이름.
// 채널 이름을 아는 사람은 누구나 메시지를 보낼 수 있으니, 바꾸고 싶으면 아무도 모를 문자열로 바꾸세요.
// (단, 참가자 페이지는 아래 목록에 있는 번호만 화면에 띄우므로 엉뚱한 내용이 나오지는 않습니다.)
window.RELAY = "https://ntfy.sh";
window.TOPIC = "emoji-movie-iyayd3admwes";

// 문제 목록. id는 서로 겹치지 않게 유지하세요(관리자가 보낸 번호로 문제를 찾습니다).
window.MOVIES = [
  { id: 1,  emoji: "🦁👑🌅",   title: "라이온 킹" },
  { id: 2,  emoji: "👸❄️⛄",   title: "겨울왕국" },
  { id: 3,  emoji: "🚢🧊💔",   title: "타이타닉" },
  { id: 4,  emoji: "🦖🦕🏝️",   title: "쥬라기 공원" },
  { id: 5,  emoji: "🐀👨‍🍳🍲",  title: "라따뚜이" },
  { id: 6,  emoji: "🧙‍♂️💍🌋",  title: "반지의 제왕" },
  { id: 7,  emoji: "🐠🔍🌊",   title: "니모를 찾아서" },
  { id: 8,  emoji: "👴🏠🎈",   title: "업" },
  { id: 9,  emoji: "🤖🌱🚀",   title: "월-E" },
  { id: 10, emoji: "🧸🤠🚀",   title: "토이 스토리" },
  { id: 11, emoji: "⚡👓🧙",   title: "해리 포터" },
  { id: 12, emoji: "🏠🪨🍑🪜", title: "기생충" },
  { id: 13, emoji: "🚄🧟‍♂️🏙️",  title: "부산행" },
  { id: 14, emoji: "🌉👹🏹",   title: "괴물" },
  { id: 15, emoji: "🧞‍♂️🪔🕌",  title: "알라딘" },
  { id: 16, emoji: "👸🐃🌹",   title: "미녀와 야수" },
  { id: 17, emoji: "🧜‍♀️🦀🌊",  title: "인어공주" },
  { id: 18, emoji: "🟢👹🐴",   title: "슈렉" },
  { id: 19, emoji: "👹👧🚪",   title: "몬스터 주식회사" },
  { id: 20, emoji: "😀😢😡🧠", title: "인사이드 아웃" },
  { id: 21, emoji: "💀🎸🌼",   title: "코코" },
  { id: 22, emoji: "⭐⚔️🌌",   title: "스타워즈" },
  { id: 23, emoji: "🕷️🧑🏙️",   title: "스파이더맨" },
  { id: 24, emoji: "🦇🦸‍♂️🌃",  title: "배트맨" },
  { id: 25, emoji: "👠🎃🕛",   title: "신데렐라" },
  { id: 26, emoji: "🍎👸⛏️",   title: "백설공주" },
  { id: 27, emoji: "💊🕶️💻",   title: "매트릭스" },
  { id: 28, emoji: "🚀🌽🕳️⏳", title: "인터스텔라" },
  { id: 29, emoji: "👽🚲🌕",   title: "E.T." },
  { id: 30, emoji: "🐼🥋🥟",   title: "쿵푸팬더" },
];

// 두 페이지가 주고받는 메시지 형식:
//   { t: "q", id }  문제 출제      { t: "a", id }  정답 공개      { t: "c" }  화면 비우기
window.findMovie = id => window.MOVIES.find(m => m.id === Number(id)) || null;

window.parseMsg = raw => {
  try {
    const m = JSON.parse(raw);
    if (m.t === "c") return { t: "c" };
    if ((m.t === "q" || m.t === "a") && window.findMovie(m.id)) return { t: m.t, id: Number(m.id) };
  } catch (e) {}
  return null;
};

// 현재 상태(가장 최근 문제와 정답 공개 여부)를 지난 메시지들로부터 계산.
window.reduceState = (state, msg) => {
  if (!msg) return state;
  if (msg.t === "c") return { id: null, revealed: false };
  if (msg.t === "q") return { id: msg.id, revealed: false };
  if (msg.t === "a" && msg.id === state.id) return { id: state.id, revealed: true };
  return state;
};

// 채널 구독: 처음 접속하면 최근 12시간 기록으로 현재 상태를 맞추고, 그 뒤로는 실시간으로 받는다.
// onMsg(msg, isLive), onStatus("live" | "connecting" | "offline")
window.subscribe = (onMsg, onStatus) => {
  const base = `${window.RELAY}/${encodeURIComponent(window.TOPIC)}`;
  let es = null, lastId = null, retry = 1000;

  const handle = (data, live) => {
    let ev;
    try { ev = JSON.parse(data); } catch (e) { return; }
    if (ev.event !== "message") return;
    lastId = ev.id;
    onMsg(window.parseMsg(ev.message), live);
  };

  const connect = () => {
    onStatus("connecting");
    // 놓친 메시지가 있으면 마지막으로 받은 것 이후부터 다시 받는다.
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

window.publish = msg =>
  fetch(`${window.RELAY}/${encodeURIComponent(window.TOPIC)}`, { method: "POST", body: JSON.stringify(msg) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); });
