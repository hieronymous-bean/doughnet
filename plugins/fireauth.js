import { initFirebaseBackend } from '../helpers/firebase/authUtils';

const firebaseConfig = {
    apiKey: process.env.apikey,
    authDomain: process.env.authdomain,
    databaseURL: process.env.databaseurl,
    projectId: process.env.projectid,
    storageBucket: process.env.storgebucket,
    messagingSenderId: process.env.message,
    appId: process.env.appid,
    measurementId: process.env.measurementId,
    authEmulatorHost: process.env.authEmulatorHost,
};
if (process.env.auth === "firebase") {
    initFirebaseBackend(firebaseConfig);
}
