// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCAWNqOwWf1ekKASbNQqIt8uwagObNpkuI",
    authDomain: "bd-food-32b19.firebaseapp.com",
    projectId: "bd-food-32b19",
    storageBucket: "bd-food-32b19.appspot.com",
    messagingSenderId: "1005510401289",
    appId: "1:1005510401289:web:4a6e624a11b2fdfc4047d8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;