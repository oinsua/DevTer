// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider,  onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv7t3MkOpc4iYiHdmMiqaWnWe1acXOYas",
  authDomain: "devter-4585a.firebaseapp.com",
  projectId: "devter-4585a",
  storageBucket: "devter-4585a.appspot.com",
  messagingSenderId: "397753705423",
  appId: "1:397753705423:web:cb363b668231652f4868ba",
  measurementId: "G-HHD9NTPGGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
const auth = getAuth();
//const analytics = getAnalytics(app);
console.log('app: ', app)
console.log('provider: ', provider)
console.log('auth: ', auth)

export const onAuthStateChange = () => {
  return  onAuthStateChanged(auth,(user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      return user;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

export const loginGitHub = () => {
    return signInWithPopup(auth, provider);
};