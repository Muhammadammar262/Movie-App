// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBcxr9Uuk48PFiANkeMiPMGTMX4PHqvYBU',
  authDomain: 'fir-yt-70de7.firebaseapp.com',
  projectId: 'fir-yt-70de7',
  storageBucket: 'fir-yt-70de7.appspot.com',
  messagingSenderId: '623311896158',
  appId: '1:623311896158:web:f056a4350e603ba846becf',
  measurementId: 'G-38GBM87848',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
