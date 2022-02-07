import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDk1JFWef-xBvFTcxdtdvfRs7Tv_eJQM1U",
    authDomain: "twitter-clone-6a3d4.firebaseapp.com",
    projectId: "twitter-clone-6a3d4",
    storageBucket: "twitter-clone-6a3d4.appspot.com",
    messagingSenderId: "345410317706",
    appId: "1:345410317706:web:850c1e577a989f0a8a2c73"
  };


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };