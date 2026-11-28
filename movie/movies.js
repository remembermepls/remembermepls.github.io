// 이모지 영화 맞추기: 관리자 페이지와 참가자 페이지가 함께 쓰는 설정과 문제 목록.

// 실시간 중계 서버(ntfy.sh, 무료·가입 불필요)와 채널 이름.
// 채널 이름을 아는 사람은 누구나 메시지를 보낼 수 있으니, 바꾸고 싶으면 아무도 모를 문자열로 바꾸세요.
// (단, 참가자 페이지는 아래 목록에 있는 번호만 화면에 띄우므로 엉뚱한 내용이 나오지는 않습니다.)
window.RELAY = "https://ntfy.sh";
window.TOPIC = "emoji-movie-iyayd3admwes";

// 난이도: 1 쉬움 · 2 보통 · 3 어려움   (k10m: true = 천만 관객 한국 영화)
window.LEVELS = { 1: "쉬움", 2: "보통", 3: "어려움" };

// 문제 목록. id는 서로 겹치지 않게 유지하세요(관리자가 보낸 번호로 문제를 찾습니다).
// 어려움 문제는 제목을 그대로 그리지 않고, 영화를 본 사람만 아는 장면·소품으로 힌트를 줍니다.
window.MOVIES = [
  // ── 쉬움 (15)
  { id: 1,  level: 1, emoji: "🦁👑🌅",   title: "라이온 킹" },
  { id: 2,  level: 1, emoji: "👸❄️⛄",   title: "겨울왕국" },
  { id: 3,  level: 1, emoji: "🚢🧊💔",   title: "타이타닉" },
  { id: 4,  level: 1, emoji: "🦖🦕🏝️",   title: "쥬라기 공원" },
  { id: 7,  level: 1, emoji: "🐠🔍🌊",   title: "니모를 찾아서" },
  { id: 10, level: 1, emoji: "🧸🤠🚀",   title: "토이 스토리" },
  { id: 11, level: 1, emoji: "⚡👓🧙",   title: "해리 포터" },
  { id: 15, level: 1, emoji: "🧞‍♂️🪔🕌",  title: "알라딘" },
  { id: 17, level: 1, emoji: "🧜‍♀️🦀🌊",  title: "인어공주" },
  { id: 22, level: 1, emoji: "⭐⚔️🌌",   title: "스타워즈" },
  { id: 23, level: 1, emoji: "🕷️🧑🏙️",   title: "스파이더맨" },
  { id: 24, level: 1, emoji: "🦇🦸‍♂️🌃",  title: "배트맨" },
  { id: 25, level: 1, emoji: "👠🎃🕛",   title: "신데렐라" },
  { id: 26, level: 1, emoji: "🍎👸⛏️",   title: "백설공주" },
  { id: 30, level: 1, emoji: "🐼🥋🥟",   title: "쿵푸팬더" },

  // ── 보통 (17)
  { id: 5,  level: 2, emoji: "🐀👨‍🍳🍲",  title: "라따뚜이" },
  { id: 6,  level: 2, emoji: "🧙‍♂️💍🌋",  title: "반지의 제왕" },
  { id: 8,  level: 2, emoji: "👴🏠🎈",   title: "업" },
  { id: 9,  level: 2, emoji: "🤖🌱🚀",   title: "월-E" },
  { id: 13, level: 2, k10m: true, emoji: "🚄🧟‍♂️🧟‍♀️👨‍👧💪🏙️", title: "부산행" },
  { id: 16, level: 2, emoji: "👸🐃🌹",   title: "미녀와 야수" },
  { id: 18, level: 2, emoji: "🟢👹🐴",   title: "슈렉" },
  { id: 19, level: 2, emoji: "👹👧🚪",   title: "몬스터 주식회사" },
  { id: 20, level: 2, emoji: "😀😢😡🧠", title: "인사이드 아웃" },
  { id: 21, level: 2, emoji: "💀🎸🌼",   title: "코코" },
  { id: 27, level: 2, emoji: "💊🕶️💻",   title: "매트릭스" },
  { id: 29, level: 2, emoji: "👽🚲🌕",   title: "E.T." },
  { id: 31, level: 2, emoji: "🐰👮‍♀️🦊",  title: "주토피아" },
  { id: 32, level: 2, emoji: "👦🏠🎄🪤", title: "나 홀로 집에" },
  { id: 33, level: 2, k10m: true, emoji: "🏖️🌊🌊🏙️😱🚁", title: "해운대" },
  { id: 34, level: 2, emoji: "🔵👽🌳",   title: "아바타" },
  { id: 35, level: 2, k10m: true, emoji: "1️⃣2️⃣⛵🆚🚢🌀", title: "명량" },

  // ── 어려움 (18)
  { id: 12, level: 3, k10m: true, emoji: "🏠🪨🍑🪜⬇️🌧️", title: "기생충" },
  { id: 14, level: 3, k10m: true, emoji: "🌉🐟👹🧪👧🏹", title: "괴물" },
  { id: 28, level: 3, emoji: "🚀🌽🕳️⏳", title: "인터스텔라" },
  { id: 36, level: 3, emoji: "🔨🐙🥟🔒", title: "올드보이" },
  { id: 37, level: 3, emoji: "🌾🌧️📻🔦", title: "살인의 추억" },
  { id: 38, level: 2, k10m: true, emoji: "🕵️‍♂️🕵️‍♀️🍗🍗💰🔫", title: "극한직업" },
  { id: 39, level: 3, emoji: "🎴✋🔪💰", title: "타짜" },
  { id: 40, level: 2, k10m: true, emoji: "🚒👨‍🚒⚖️7️⃣🔥👹", title: "신과함께-죄와 벌" },
  { id: 41, level: 3, emoji: "💤🏙️🔄🌀", title: "인셉션" },
  { id: 42, level: 3, emoji: "🔨🧱🕳️🌧️", title: "쇼생크 탈출" },
  { id: 43, level: 3, emoji: "🍫📦🏃‍♂️🪶", title: "포레스트 검프" },
  { id: 44, level: 3, emoji: "🪴🔫👧🥛", title: "레옹" },
  { id: 45, level: 3, emoji: "🎹💃🌃⭐", title: "라라랜드" },
  { id: 46, level: 3, emoji: "⏳🔙💑🌧️", title: "어바웃 타임" },
  { id: 47, level: 3, emoji: "📺🎥👋🚪", title: "트루먼 쇼" },
  { id: 48, level: 3, emoji: "🚗⚡⏰🔙", title: "백 투 더 퓨처" },
  { id: 49, level: 3, emoji: "💈👨🔪👧", title: "아저씨" },
  { id: 50, level: 3, emoji: "🌱👵🇺🇸🏡", title: "미나리" },

  // ── 🇰🇷 천만 관객 한국 영화 (위의 7편과 합쳐 25편)
  { id: 51, level: 3, k10m: true, emoji: "🏝️🪖🏋️‍♂️🚌💥🇰🇷", title: "실미도" },
  { id: 52, level: 2, k10m: true, emoji: "👬🪖🇰🇷💥👞⛰️", title: "태극기 휘날리며" },
  { id: 53, level: 2, k10m: true, emoji: "🎭🤹‍♂️🪢👑🍶🏯", title: "왕의 남자" },
  { id: 54, level: 2, k10m: true, emoji: "💎🦹‍♀️🦹‍♂️🎰🇲🇴🧗", title: "도둑들" },
  { id: 55, level: 3, k10m: true, emoji: "👑🧑‍🤝‍🧑🎭🏯📜🔄", title: "광해, 왕이 된 남자" },
  { id: 56, level: 2, k10m: true, emoji: "7️⃣🚪👨‍👧🎒🌙🎈", title: "7번방의 선물" },
  { id: 57, level: 3, k10m: true, emoji: "⚖️👨‍💼🍲📚🚔✊", title: "변호인" },
  { id: 58, level: 3, k10m: true, emoji: "🚢❄️👦⛏️🇩🇪🏪", title: "국제시장" },
  { id: 59, level: 3, k10m: true, emoji: "🕵️‍♀️🎯🔫👘💣🇰🇷", title: "암살" },
  { id: 60, level: 2, k10m: true, emoji: "🕵️‍♂️👊💸🏢🚔😤", title: "베테랑" },
  { id: 61, level: 2, k10m: true, emoji: "🚕🧑🏼📸🛣️🍙🌸", title: "택시운전사" },
  { id: 62, level: 3, k10m: true, emoji: "🏠🧔‍♂️💪⏳🗡️⚖️", title: "신과함께-인과 연" },
  { id: 63, level: 2, k10m: true, emoji: "💪👊🇻🇳🔪🚔2️⃣", title: "범죄도시2" },
  { id: 64, level: 2, k10m: true, emoji: "💪👊🇯🇵💊🚔3️⃣", title: "범죄도시3" },
  { id: 65, level: 2, k10m: true, emoji: "💪👊💻🎰🇵🇭4️⃣", title: "범죄도시4" },
  { id: 66, level: 3, k10m: true, emoji: "🌃🪖🪖🚛🌉🌸", title: "서울의 봄" },
  { id: 67, level: 3, k10m: true, emoji: "🪦⛏️🧧🥁🐷👹", title: "파묘" },
  { id: 68, level: 3, k10m: true, emoji: "👦👑➡️🏞️🛖👨‍🌾", title: "왕과 사는 남자" },
];

// 두 페이지가 주고받는 메시지 형식:
//   { t: "q", id }  문제 출제      { t: "a", id }  정답 공개      { t: "c" }  화면 비우기
// 이모지 개수(국기·숫자키 등 합쳐진 글자는 1개로 셈) — 화면에서 글자 크기를 맞출 때 사용
window.emojiCount = str => {
  try { return [...new Intl.Segmenter("ko", { granularity: "grapheme" }).segment(str)].length; }
  catch (e) { return Math.ceil([...str].length / 1.5); }
};

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
    .then(r => { if (!r.ok) throw Object.assign(new Error(`HTTP ${r.status}`), { status: r.status }); });
