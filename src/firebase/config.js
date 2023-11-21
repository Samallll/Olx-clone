import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1VuXI-KbqWbv09z6ZSv0zr1AUT9tq0Ps",
    authDomain: "fir-47be1.firebaseapp.com",
    projectId: "fir-47be1",
    storageBucket: "fir-47be1.appspot.com",
    messagingSenderId: "1021986040303",
    appId: "1:1021986040303:web:c84115356b0ed2aabc6e1a",
    measurementId: "G-B1H5YBCWQ4"
  };

export default firebase.initializeApp(firebaseConfig);