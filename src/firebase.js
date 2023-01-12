import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAcOt6pX4HbLVlFp697g0S8oZ9u9I8dsWs",
  authDomain: "tools-corner-redux-crud-final.firebaseapp.com",
  databaseURL: "https://tools-corner-redux-crud-final-default-rtdb.firebaseio.com",
  projectId: "tools-corner-redux-crud-final",
  storageBucket: "tools-corner-redux-crud-final.appspot.com",
  messagingSenderId: "666553954315",
  appId: "1:666553954315:web:74e4606e8389fedea5970e"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
