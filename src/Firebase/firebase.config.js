// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDSkNgRz46xBs-vWQon0jJOL11-_TIsD8",
    authDomain: "ema-john-with-firebase-a-ff75a.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-ff75a",
    storageBucket: "ema-john-with-firebase-a-ff75a.appspot.com",
    messagingSenderId: "845857415041",
    appId: "1:845857415041:web:b0a1d167931edc6fa11280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;