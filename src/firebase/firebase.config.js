// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXjWgmiumY0bMr6jc9xr7UHdaZTm5xP7M",
  authDomain: "the-dragon-news-8e7a2.firebaseapp.com",
  projectId: "the-dragon-news-8e7a2",
  storageBucket: "the-dragon-news-8e7a2.firebasestorage.app",
  messagingSenderId: "1032849447138",
  appId: "1:1032849447138:web:74a6da05223bdc00b2a6bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
