// ── Firebase config partagée par avis.html / dashboard.html / qrcode-generator.html
// Module ES — chargé via <script type="module"> dans chaque page.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAILc0n729KtuQfAg49-GKyUhHgnd56x3U",
  authDomain: "al-forno-1e4a3.firebaseapp.com",
  projectId: "al-forno-1e4a3",
  storageBucket: "al-forno-1e4a3.firebasestorage.app",
  messagingSenderId: "434594493945",
  appId: "1:434594493945:web:22eec74c3ba51fa04af928",
  measurementId: "G-4FDVVNEZ1C"
};

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
