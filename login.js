import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnyT7JEcUP924ZhwBcV3w4WJ1DlBUuGAw",
  authDomain: "dzride-23c29.firebaseapp.com",
  projectId: "dzride-23c29",
  storageBucket: "dzride-23c29.appspot.com",
  messagingSenderId: "407633835230",
  appId: "1:407633835230:web:077674a2094845e6653e4f",
  measurementId: "G-BCC77GY1GP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
   alert("مرحباً " + user.displayName + "! تم تسجيل الدخول.");
    console.log("User signed in:", user);
  } catch (error) {
    console.error("Error during sign in:", error);
    alert("فشل تسجيل الدخول. حاول مرة أخرى.");
  }
}

document.getElementById("googleLogin").addEventListener("click", signInWithGoogle);

auth.onAuthStateChanged(user => {
  if(user) {
    console.log("User is signed in:", user);
  } else {
    console.log("User is signed out");
  }
});

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("User is signed out");
    window.location.href = "home.html"; // أو رابط صفحة تسجيل الدخول
  }
});