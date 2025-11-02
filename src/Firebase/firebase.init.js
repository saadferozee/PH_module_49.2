// Do Not Share this information to Public, DANGER !!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXZlAv8KZbzHLjfUA7oqZh1jlIrx_mzDo",
    authDomain: "privateroute-with-firebase.firebaseapp.com",
    projectId: "privateroute-with-firebase",
    storageBucket: "privateroute-with-firebase.firebasestorage.app",
    messagingSenderId: "934215652815",
    appId: "1:934215652815:web:bf0384f41908d2fa3e2eba",
    measurementId: "G-05WGLRWEPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// crate auth
const auth = getAuth(app);

export {auth, analytics};