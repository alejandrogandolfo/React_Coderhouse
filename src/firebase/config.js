import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN8pkjUi1cXfbJsoS5rWaTxn3SXo-k2qo",
  authDomain: "proyecto-final-react-cod-aed62.firebaseapp.com",
  projectId: "proyecto-final-react-cod-aed62",
  storageBucket: "proyecto-final-react-cod-aed62.firebasestorage.app",
  messagingSenderId: "217846619467",
  appId: "1:217846619467:web:110207d1774a1663ccdcce"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);