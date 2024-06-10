// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
import firebase from "@react-native-firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM-rKOEn4Je9H4yHZjwTcv1dCbnduz2Hk",
  authDomain: "citizensreportingsolutionapp.firebaseapp.com",
  projectId: "citizensreportingsolutionapp",
  storageBucket: "citizensreportingsolutionapp.appspot.com",
  messagingSenderId: "599792198109",
  appId: "1:599792198109:web:1ef3c53223685a71799634",
  measurementId: "G-EYW4R98MG7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebase };
