// ===== Import Firebase SDKs =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// ===== Firebase Configuration =====
const firebaseConfig = {
  apiKey: "AIzaSyAWP3R0zn7154tuh7m5Ze5u03MbvzR60PU",
  authDomain: "first-46516.firebaseapp.com",
  projectId: "first-46516",
  storageBucket: "first-46516.firebasestorage.app",
  messagingSenderId: "453733573409",
  appId: "1:453733573409:web:bc80547a718b1d1c21d460",
  measurementId: "G-7PMZZQ90XQ"
};

// ===== Initialize Firebase =====
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ===== SIGNUP FUNCTION =====
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;
  const name = signupForm.querySelector('input[type="text"]').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(`Welcome ${name}! Account created successfully.`);
    bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    signupForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

// ===== LOGIN FUNCTION =====
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert(`Welcome back, ${userCredential.user.email}!`);
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    loginForm.reset();
  } catch (error) {
    alert(error.message);
  }
});
