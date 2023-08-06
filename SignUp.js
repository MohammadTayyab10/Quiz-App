// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxUagfHF7BjIhluq1lVGswwVLMS7d6rZ4",
    authDomain: "quiz-8612f.firebaseapp.com",
    projectId: "quiz-8612f",
    storageBucket: "quiz-8612f.appspot.com",
    messagingSenderId: "159064948323",
    appId: "1:159064948323:web:8cfbe10773de522aed4256",
    measurementId: "G-5PFXRX3RXS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("btn")

btn.addEventListener('click', () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign In
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User:", user);
            window.location.href = "./LogIn.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == "auth/invalid-email" && errorMessage == "Firebase: Error (auth/invalid-email).") {
                Swal.fire({
                    title: `Email`,
                    text: `Please Enter Email `,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else if (errorCode == "auth/missing-email" && errorMessage == "Firebase: Error (auth/missing-email).") {
                Swal.fire({
                    title: `Email`,
                    text: `Please Enter Email`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else if (errorCode == "auth/email-already-in-use" && errorMessage == "Firebase: Error (auth/email-already-in-use).") {
                function any(){Swal.fire({
                    title: `Email`,
                    text: `Email Already In Use And Redirect To LogIn Page`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });}
                setInterval(any, 1000)
                function anker() {
                    window.location.href = "./Login.html"
                }
                setInterval(anker, 6000)
            }
            else if (errorCode == "auth/missing-password" && errorMessage == "Firebase: Error (auth/missing-password).") {
                Swal.fire({
                    title: `Password`,
                    text: `Please Enter Password`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else if (errorCode == "auth/weak-password" && errorMessage == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                Swal.fire({
                    title: `Password`,
                    text: ` Password Should Be At Least 6 Characters`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else {
                console.log("ErrorCode SignUp:", errorCode);
                console.log("ErrorMessage SignUp:", errorMessage);
            }
        });
})
