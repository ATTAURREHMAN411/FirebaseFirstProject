import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3mqkTmRsRQ1P5jU4tetXq3BBxUQOvzUA",
    authDomain: "web-app-31ebe.firebaseapp.com",
    projectId: "web-app-31ebe",
    storageBucket: "web-app-31ebe.firebasestorage.app",
    messagingSenderId: "278336327479",
    appId: "1:278336327479:web:9185a9e89eec9bddcd94b2",
    measurementId: "G-E0F2GCF4BL"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = "en"
  const provider = new GoogleAuthProvider()

  const google = document.querySelector(".google")

  google.addEventListener("click", ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "card.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
  });
  })