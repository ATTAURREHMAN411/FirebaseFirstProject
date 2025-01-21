// signInWithEmailAndPassword 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth();

let button = document.querySelector(".Lbutton")
   
button.addEventListener("click", function(event){
  let email = document.querySelector(".email").value
  let password = document.querySelector(".password").value
   event.preventDefault()
   signInWithEmailAndPassword (auth, email, password)
   .then((userCredential) => { 
     const user = userCredential.user;
     console.log(user);
     window.location = "card.html"
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
    console.log(errorCode);
     alert("error")
   });
})

let sigin = document.querySelector(".sigin")
let login = document.querySelector(".login")
let formSigin = document.querySelector(".form-sigin")
let formLogin = document.querySelector(".form-login ")
sigin.addEventListener("click", ()=>{
   formSigin.classList.remove("disable")
   formLogin.classList.add("disable")
})
login.addEventListener("click", ()=>{
    formLogin.classList.remove("disable")
    formSigin.classList.add("disable")
})







