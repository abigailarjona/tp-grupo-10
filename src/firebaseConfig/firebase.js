import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

//Credenciales de Abigail
// const firebaseConfig = {
//   apiKey: "AIzaSyBjexxHYDxMTIW_r8IaXyHeKBq6CGwXjms",
//   authDomain: "tp-grupo10.firebaseapp.com",
//   projectId: "tp-grupo10",
//   storageBucket: "tp-grupo10.appspot.com",
//   messagingSenderId: "1018239703858",
//   appId: "1:1018239703858:web:698ce9a78153dc7e20152b"

// };

// Mis credenciales 
const firebaseConfig = {
  apiKey: "AIzaSyC4h_75Z3MDeXD6MEWFYlhakSTsrHzoOtI",
  authDomain: "cac-tp-grupo10.firebaseapp.com",
  projectId: "cac-tp-grupo10",
  storageBucket: "cac-tp-grupo10.appspot.com",
  messagingSenderId: "270805511492",
  appId: "1:270805511492:web:61ec1920e8c0a272cb7b11"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
