import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB5Cx1psBkAiehC_q0zJ6c1u3dpSL4ScGU",
  authDomain: "doughnet-01.firebaseapp.com",
  projectId: "doughnet-01",
  storageBucket: "doughnet-01.appspot.com",
  messagingSenderId: "465162683465",
  appId: "1:465162683465:web:080f99f6c77141f80b2b98",
  measurementId: "G-1DC4QQPF6X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const signIn = async(email, password) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (e) {
    throw new Error('Error signing in')
  }
}

const signOut = async() => {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    throw new Error('Error while signing out');
  }
}

const addAuthListener = (callback) => {
  const onChange = (user) => {
    if (user) {
      callback({});
    } else {
      callback(null);
    }
  }
  return firebase.auth().onAuthStateChanged(onChange);
}

const registerNewUser = async(email, password) => {
  try {
    const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return newUser;
  } catch (e) {
    throw new Error('Error registering new user');
  }
}

const getAuthenticatedUser = () => {
  if (!sessionStorage.getItem('authUser')) return null;
  return JSON.parse(sessionStorage.getItem('authUser'));
}

const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  if (!user) return null;
  return {};
}

export {
  signIn,
  signOut,
  registerNewUser,
  getAuthenticatedUser,
  addAuthListener,
  getCurrentUser
}