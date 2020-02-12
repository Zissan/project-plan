import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyC6eu7Vk8yXqCbhZvgq_nn4v6RnKPCaLiQ",
  authDomain: "zc-project-planner.firebaseapp.com",
  databaseURL: "https://zc-project-planner.firebaseio.com",
  projectId: "zc-project-planner",
  storageBucket: "zc-project-planner.appspot.com",
  messagingSenderId: "968097924267",
  appId: "1:968097924267:web:2ca070a80c1c9362b963ee"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
