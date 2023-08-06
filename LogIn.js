// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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
    // Sign In Existing User
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User Log In:", user);
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    onAuthStateChanged(auth, (user) => {
                        if (user.emailVerified === true) {
                            const uid = user.uid;
                            console.log(uid)
                            window.location.href = "Quiz.html"
                        } else {
                            Swal.fire({
                                title: `Verify Account!`,
                                text: `Please See Gmail `,
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        }
                    }
                    );
                });
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
            else if (errorCode == "auth/user-not-found" && errorMessage == "Firebase: Error (auth/user-not-found).") {
                Swal.fire({
                    title: `User`,
                    text: `User Not Found `,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else if (errorCode == "auth/missing-password" && errorMessage == "Firebase: Error (auth/missing-password).") {
                Swal.fire({
                    title: `Password`,
                    text: `Please Enter Password`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else if (errorCode == "auth/wrong-password" && errorMessage == "Firebase: Error (auth/wrong-password).") {
                Swal.fire({
                    title: `Password`,
                    text: `Please Enter Right Password`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else if (errorCode == "auth/network-request-failed" && errorMessage == "Firebase: Error (auth/network-request-failed).") {
                Swal.fire({
                    title: `Network Error`,
                    text: `Please Connect Network!`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else {
                console.log("ErrorCode LogIn:", errorCode);
                console.log("ErrorMessage LogIn:", errorMessage);
            }
        });

})