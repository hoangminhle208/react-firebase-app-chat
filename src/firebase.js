// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaUw8quNKoBCKRZiS0lYLlQHnonQJp5QY",
    authDomain: "chat-6c2ba.firebaseapp.com",
    projectId: "chat-6c2ba",
    storageBucket: "chat-6c2ba.appspot.com",
    messagingSenderId: "875656673498",
    appId: "1:875656673498:web:efa109c4b4884a6f5a4de3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();