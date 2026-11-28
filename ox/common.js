// 관리자/사용자 페이지가 함께 쓰는 Firebase 연결과 도우미 함수
import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

export const configured = Boolean(firebaseConfig.apiKey && firebaseConfig.databaseURL);
export const db = configured ? getDatabase(initializeApp(firebaseConfig)) : null;

// 모든 데이터는 데이터베이스의 ox/ 아래에 저장한다
export const R = (path = "") => ref(db, path ? "ox/" + path : "ox");

// 서버 시계 기준 현재 시각 (기기마다 시계가 달라도 제한시간이 똑같이 흐르게)
let offset = 0;
if (db) onValue(ref(db, ".info/serverTimeOffset"), (s) => { offset = s.val() || 0; });
export const serverNow = () => Date.now() + offset;

// 이름 정리: 앞뒤 공백 제거, 연속 공백 하나로
export const cleanName = (s) => String(s || "").replace(/\s+/g, " ").trim();

// 이름 → 데이터베이스 키 (대소문자 구분 없이 같은 이름은 같은 키)
export const nameKey = (name) =>
  encodeURIComponent(cleanName(name).toLowerCase()).replace(/\./g, "%2E");

export const randomId = () =>
  Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => b.toString(16).padStart(2, "0")).join("");

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} },
};

export const SETUP_HTML = `
  <div class="intro">
    <p class="big">🔧</p>
    <h2>Firebase 설정이 필요해요</h2>
    <p><code>ox/firebase-config.js</code> 파일에 Firebase 설정값을 넣으면 퀴즈를 시작할 수 있어요.</p>
  </div>`;
