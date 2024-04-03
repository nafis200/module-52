
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBHfP3y3xZHx1dq2uChAiquSCmJKMGRpsM",
  authDomain: "module-52-a0f9f.firebaseapp.com",
  projectId: "module-52-a0f9f",
  storageBucket: "module-52-a0f9f.appspot.com",
  messagingSenderId: "1042639983862",
  appId: "1:1042639983862:web:de20f9d287d275eb3c88d7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth