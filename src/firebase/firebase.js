// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAMeiyQxo3mvssLtnTUtPGFJgkKkYV5CBk",
//   authDomain: "blog-page-ae323.firebaseapp.com",
//   databaseURL: "https://blog-page-ae323-default-rtdb.firebaseio.com",
//   projectId: "blog-page-ae323",
//   storageBucket: "blog-page-ae323.appspot.com",
//   messagingSenderId: "1030464690306",
//   appId: "1:1030464690306:web:c9277dad598d85501a7c9b"
// });
const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const prodConfig = {};
const firebaseConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig;
firebase.initializeApp(firebaseConfig);
export default firebase;

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    if (password.length < 6) {
      alert("Please enter password minimum 6 letter")
    } else {
      alert(
        "There exists an account with this email. Please login with your password or continue with Google!"
      );
    }
  }
};
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};
export const signOut = () => {
  firebase.auth().signOut();
};
export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};
export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};
