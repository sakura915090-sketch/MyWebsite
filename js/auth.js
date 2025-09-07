import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { firebaseConfig, ID } from "./config.js";

// Firebase 初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ログイン関数（最低限）
export function login(password, onSuccess, onError) {
  signInWithEmailAndPassword(auth, ID, password)
    .then(() => onSuccess())
    .catch((err) => onError(err));
}