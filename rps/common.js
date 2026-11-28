// OX 서바이벌과 같은 Firebase 프로젝트와 도우미 함수를 그대로 쓰고, 데이터만 rps/ 아래에 따로 저장한다
import { db } from "../ox/common.js";
import { ref } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
export { db, configured, serverNow, cleanName, nameKey, randomId, esc, store, SETUP_HTML } from "../ox/common.js";

export const R = (path = "") => ref(db, path ? "rps/" + path : "rps");

export const HANDS = {
  S: { emoji: "✌️", name: "가위" },
  R: { emoji: "✊", name: "바위" },
  P: { emoji: "✋", name: "보" },
};
export const ORDER = ["S", "R", "P"];

// 왼쪽이 오른쪽을 이긴다: 바위 > 가위 > 보 > 바위
const BEATS = { R: "S", S: "P", P: "R" };

// 관리자(admin)를 상대로 한 내(mine) 결과: win · draw · lose · none(안 냄)
export const outcome = (mine, admin) =>
  !HANDS[mine] ? "none" : mine === admin ? "draw" : BEATS[mine] === admin ? "win" : "lose";
