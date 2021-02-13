import firebase from 'firebase/app';

const signIn = async(email, password) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (e) {
    throw new Error(e)
  }
}

const signOut = async() => {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    throw new Error(e);
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
    throw new Error(e);
  }
}

const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  if (!user) return null;
  return {
    id: user.uid,
  };
}

export {
  signIn,
  signOut,
  registerNewUser,
  addAuthListener,
  getCurrentUser
}