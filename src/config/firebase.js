import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNRS_RJfvIiPor4LgPVV4WDIJGVeFkcpY",
    authDomain: "mulheressdecidem-72c06.firebaseapp.com",
    databaseURL: "https://mulheressdecidem-72c06.firebaseio.com",
    projectId: "mulheressdecidem-72c06",
    storageBucket: "mulheressdecidem-72c06.appspot.com",
    messagingSenderId: "517852866209",
    appId: "1:517852866209:web:4c407dca520b4f43f8f2e0",
    measurementId: "G-0EX6VS3YW3"
};

export default firebase.initializeApp(firebaseConfig);