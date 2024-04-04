
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBHnxa0y8_0rwQi20bktC_FANB77XaAgko",
  authDomain: "module-52-eb323.firebaseapp.com",
  projectId: "module-52-eb323",
  storageBucket: "module-52-eb323.appspot.com",
  messagingSenderId: "945186640114",
  appId: "1:945186640114:web:77872955ed28b8e989806b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

