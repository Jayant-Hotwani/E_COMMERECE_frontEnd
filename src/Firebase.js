
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4fCNp1jYi7JVdx9BRUCGOOQ55LuHdiYo",
  authDomain: "ecommerce-d1c58.firebaseapp.com",
  projectId: "ecommerce-d1c58",
  storageBucket: "ecommerce-d1c58.appspot.com",
  messagingSenderId: "501937074090",
  appId: "1:501937074090:web:64e907a4f0cff849a985d3",
};
// export

// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
