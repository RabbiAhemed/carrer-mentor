import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBjg1ECsNVlcTFC9rTgvdNZn-sLw_zgNnM",
    authDomain: "brand-promoter-1.firebaseapp.com",
    projectId: "brand-promoter-1",
    storageBucket: "brand-promoter-1.appspot.com",
    messagingSenderId: "343569769163",
    appId: "1:343569769163:web:78f8cafa8cf89e1158f14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;