import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM-rKOEn4Je9H4yHZjwTcv1dCbnduz2Hk",
  authDomain: "citizensreportingsolutionapp.firebaseapp.com",
  projectId: "citizensreportingsolutionapp",
  storageBucket: "citizensreportingsolutionapp.appspot.com",
  messagingSenderId: "599792198109",
  appId: "1:599792198109:web:1ef3c53223685a71799634",
  measurementId: "G-EYW4R98MG7",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);

// export { firebase };
