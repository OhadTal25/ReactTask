import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHmMOfbgdOVqUS0uhCUz-Qljf-z380fO8",
  authDomain: "moveotask-2febc.firebaseapp.com",
  projectId: "moveotask-2febc",
  storageBucket: "moveotask-2febc.appspot.com",
  messagingSenderId: "18514962583",
  appId: "1:18514962583:web:d123228c033df07bbb61d2",
  measurementId: "G-GHJ7GZ0VKV",
  databaseURL: "https://moveotask-2febc-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const realtimeDb = getDatabase(app);
