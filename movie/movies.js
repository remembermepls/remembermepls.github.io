// 이모지 영화 맞추기: 관리자 페이지와 참가자 페이지가 함께 쓰는 설정과 문제 목록.

// 실시간 중계 서버(ntfy.sh, 무료·가입 불필요)와 채널 이름.
// 채널 이름을 아는 사람은 누구나 메시지를 보낼 수 있으니, 바꾸고 싶으면 아무도 모를 문자열로 바꾸세요.
// (단, 참가자 페이지는 아래 목록에 있는 번호만 화면에 띄우므로 엉뚱한 내용이 나오지는 않습니다.)
window.RELAY = "https://ntfy.sh";
window.TOPIC = "emoji-movie-iyayd3admwes";

// 난이도는 이모지 개수로 정해집니다(힌트가 적을수록 어려움):
//   2~3개 = 어려움 · 4개 = 보통 · 5~6개 = 쉬움
// 이모지는 영화의 핵심 장면·소품 순서로 골랐습니다. 이모지를 늘리거나 줄이면 난이도도 자동으로 바뀝니다.
// k10m: true = 천만 관객 한국 영화
window.LEVELS = { 1: "쉬움", 2: "보통", 3: "어려움" };

// 문제 목록. id는 서로 겹치지 않게 유지하세요(관리자가 보낸 번호로 문제를 찾습니다).
window.MOVIES = [
  // ── 한국 영화: 천만 관객 25편
  { id: 1, k10m: true, emoji: "🇰🇷1️⃣2️⃣⛵🌀🇯🇵", title: "명량" },
  { id: 2, k10m: true, emoji: "👮‍♂️🍗💊🔫", title: "극한직업" },
  { id: 3, k10m: true, emoji: "🚒👨‍🚒💀⚖️7️⃣🔥", title: "신과함께-죄와 벌" },
  { id: 4, k10m: true, emoji: "🚢❄️👦⛏️🇩🇪🏪", title: "국제시장" },
  { id: 5, k10m: true, emoji: "👮‍♂️🆚🤵💸", title: "베테랑" },
  { id: 6, k10m: true, emoji: "1️⃣2️⃣🌃🪖🚛🌸", title: "서울의 봄" },
  { id: 7, k10m: true, emoji: "💎🦹🎰🇲🇴", title: "도둑들" },
  { id: 8, k10m: true, emoji: "7️⃣🚪👨‍👧🎒🌙🎈", title: "7번방의 선물" },
  { id: 9, k10m: true, emoji: "🎯🔫👰🇰🇷", title: "암살" },
  { id: 10, k10m: true, emoji: "👊🔪🇻🇳", title: "범죄도시2" },
  { id: 11, k10m: true, emoji: "👑👥🎭📜", title: "광해, 왕이 된 남자" },
  { id: 12, k10m: true, emoji: "🎭🤹🪢👑", title: "왕의 남자" },
  { id: 13, k10m: true, emoji: "🏠🧔💪⏳🗡️⚖️", title: "신과함께-인과 연" },
  { id: 14, k10m: true, emoji: "🚕🧑🏼🎥🛣️🍙🇩🇪", title: "택시운전사" },
  { id: 15, k10m: true, emoji: "👬🪖🇰🇷💥👞⛰️", title: "태극기 휘날리며" },
  { id: 16, k10m: true, emoji: "🚄🧟‍♂️👨‍👧", title: "부산행" },
  { id: 17, k10m: true, emoji: "🏖️🌊🏙️", title: "해운대" },
  { id: 18, k10m: true, emoji: "⚖️👨‍💼🍲📚🚔✊", title: "변호인" },
  { id: 19, k10m: true, emoji: "🏝️🪖🏋️‍♂️🇰🇵🚌💥", title: "실미도" },
  { id: 20, k10m: true, emoji: "👊💊🇯🇵", title: "범죄도시3" },
  { id: 21, k10m: true, emoji: "🪦⛏️🥁🐷", title: "파묘" },
  { id: 22, k10m: true, emoji: "🪨🍑🍜", title: "기생충" },
  { id: 23, k10m: true, emoji: "🌉🐟👹", title: "괴물" },
  { id: 24, k10m: true, emoji: "👊🎰🇵🇭", title: "범죄도시4" },
  { id: 25, k10m: true, emoji: "👦👑➡️🏞️🛖👨‍🌾", title: "왕과 사는 남자" },

  // ── 한국 영화: 그 밖의 명작
  { id: 26, emoji: "🔨🐙🥟", title: "올드보이" },
  { id: 27, emoji: "🌾🌧️📻🔦", title: "살인의 추억" },
  { id: 28, emoji: "🎴✋🔪", title: "타짜" },
  { id: 29, emoji: "👧💇‍♂️🔪🦷", title: "아저씨" },
  { id: 30, emoji: "👩🍺🤮🚇", title: "엽기적인 그녀" },
  { id: 31, emoji: "☀️👧👧👧📼🏥", title: "써니" },
  { id: 32, emoji: "📐🏠💿💔", title: "건축학개론" },

  // ── 애니메이션
  { id: 33, emoji: "🐒🦁🪨", title: "라이온 킹" },
  { id: 34, emoji: "👭❄️⛄", title: "겨울왕국" },
  { id: 35, emoji: "🪔🧞‍♂️🐒", title: "알라딘" },
  { id: 36, emoji: "🌹🕯️⏰🫖", title: "미녀와 야수" },
  { id: 37, emoji: "🧜‍♀️🦀🍴🗣️", title: "인어공주" },
  { id: 38, emoji: "🍎🪞👸⛏️💤💋", title: "백설공주" },
  { id: 39, emoji: "👠🎃🕛", title: "신데렐라" },
  { id: 40, emoji: "🤠🚀🦖", title: "토이 스토리" },
  { id: 41, emoji: "🐠🐟🔍🌊🦈🐢", title: "니모를 찾아서" },
  { id: 42, emoji: "👹👁️👧🚪😱", title: "몬스터 주식회사" },
  { id: 43, emoji: "🎈🎈🏠👴👦🐕", title: "업" },
  { id: 44, emoji: "🤖🌱🚀", title: "월-E" },
  { id: 45, emoji: "😄😢😡😱🤢🧠", title: "인사이드 아웃" },
  { id: 46, emoji: "💀🎸🌼", title: "코코" },
  { id: 47, emoji: "🐰👮‍♀️🦊🦥", title: "주토피아" },
  { id: 48, emoji: "🐀👨‍🍳🍲🇫🇷", title: "라따뚜이" },
  { id: 49, emoji: "🌊🛶🐓🪝", title: "모아나" },
  { id: 50, emoji: "👸💇‍♀️🗼🍳🏮", title: "라푼젤" },
  { id: 51, emoji: "🟢👹🐴🏰", title: "슈렉" },
  { id: 52, emoji: "🐼🥋🥟", title: "쿵푸팬더" },
  { id: 53, emoji: "🍌🥽🌕👧👧👧", title: "슈퍼배드" },
  { id: 54, emoji: "🚗⚡9️⃣5️⃣🏁", title: "카" },
  { id: 55, emoji: "👨‍👩‍👧‍👦🦸‍♂️💪🔴", title: "인크레더블" },
  { id: 56, emoji: "🔥💧💑🏙️", title: "엘리멘탈" },
  { id: 57, emoji: "🌳🐱🚌☔", title: "이웃집 토토로" },
  { id: 58, emoji: "👧🐷🛁🐉👻", title: "센과 치히로의 행방불명" },
  { id: 59, emoji: "🏰🦵🔥👵", title: "하울의 움직이는 성" },

  // ── 할리우드·해외 영화
  { id: 60, emoji: "🚢🧊💔", title: "타이타닉" },
  { id: 61, emoji: "🦖🚙🥤", title: "쥬라기 공원" },
  { id: 62, emoji: "⚡👓🧹🦉🪄🏰", title: "해리 포터" },
  { id: 63, emoji: "💍🌋🧙‍♂️", title: "반지의 제왕" },
  { id: 64, emoji: "⚔️🌌🤖👨‍👦", title: "스타워즈" },
  { id: 65, emoji: "🔴💊🔵🕶️💻", title: "매트릭스" },
  { id: 66, emoji: "🚀🌽🕳️⏳📚", title: "인터스텔라" },
  { id: 67, emoji: "💤🏙️🌀", title: "인셉션" },
  { id: 68, emoji: "🔵👽🌳🐉", title: "아바타" },
  { id: 69, emoji: "🛡️🔨🧤💎⏳", title: "어벤져스: 엔드게임" },
  { id: 70, emoji: "🦾🔴🟡", title: "아이언맨" },
  { id: 71, emoji: "🕷️🕸️🏙️", title: "스파이더맨" },
  { id: 72, emoji: "🦇🃏🚓💥", title: "다크 나이트" },
  { id: 73, emoji: "🚗➡️🤖", title: "트랜스포머" },
  { id: 74, emoji: "🏴‍☠️🚢🧭🍾", title: "캐리비안의 해적" },
  { id: 75, emoji: "🕶️📼💥🧗‍♂️", title: "미션 임파서블" },
  { id: 76, emoji: "🤖🕶️👍🔥", title: "터미네이터" },
  { id: 77, emoji: "🚗⚡🔙", title: "백 투 더 퓨처" },
  { id: 78, emoji: "👽🚲🌕", title: "E.T." },
  { id: 79, emoji: "🦈🏖️😱", title: "죠스" },
  { id: 80, emoji: "✈️🕶️🏍️🏐", title: "탑건" },
  { id: 81, emoji: "👦🏠🎄🪤🦹🦹", title: "나 홀로 집에" },
  { id: 82, emoji: "🍫🏃‍♂️🪶", title: "포레스트 검프" },
  { id: 83, emoji: "🔨🧱🕳️🌧️", title: "쇼생크 탈출" },
  { id: 84, emoji: "🪴🔫👧🥛", title: "레옹" },
  { id: 85, emoji: "🎹💃🌃⭐", title: "라라랜드" },
  { id: 86, emoji: "⏪👰☔", title: "어바웃 타임" },
  { id: 87, emoji: "📓👵👴🛶🦢💕", title: "노트북" },
  { id: 88, emoji: "🎸🎤🗽🎧🎧💿", title: "비긴 어게인" },
  { id: 89, emoji: "🎩🎪🐘🎤", title: "위대한 쇼맨" },
  { id: 90, emoji: "🎤👑🦷🎹🏟️", title: "보헤미안 랩소디" },
  { id: 91, emoji: "🤡🪜💃", title: "조커" },
  { id: 92, emoji: "🕴️☂️🍺🐶👞", title: "킹스맨" },
  { id: 93, emoji: "🏎️💨👨‍👩‍👧‍👦", title: "분노의 질주" },
  { id: 94, emoji: "📺🎥👋🚪", title: "트루먼 쇼" },
  { id: 95, emoji: "🍫🎫🏭🎩👦", title: "찰리와 초콜릿 공장" },
  { id: 96, emoji: "🏛️🦖🌙👮‍♂️🗿", title: "박물관이 살아있다" },
  { id: 97, emoji: "👰👨👨👨🎶🇬🇷", title: "맘마미아!" },
  { id: 98, emoji: "👦👁️👻", title: "식스 센스" },
  { id: 99, emoji: "🦍🏢✈️👱‍♀️", title: "킹콩" },
  { id: 100, emoji: "🏝️🏐📦", title: "캐스트 어웨이" },
];

// 두 페이지가 주고받는 메시지 형식:
//   { t: "q", id }  문제 출제      { t: "a", id }  정답 공개      { t: "c" }  화면 비우기
// 이모지 개수(국기·숫자키 등 합쳐진 글자는 1개로 셈) — 화면에서 글자 크기를 맞출 때 사용
window.emojiCount = str => {
  try { return [...new Intl.Segmenter("ko", { granularity: "grapheme" }).segment(str)].length; }
  catch (e) { return Math.ceil([...str].length / 1.5); }
};

// 이모지 개수로 난이도 계산
window.levelOf = str => { const n = window.emojiCount(str); return n <= 3 ? 3 : n === 4 ? 2 : 1; };
window.MOVIES.forEach(m => { m.level = window.levelOf(m.emoji); });

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
