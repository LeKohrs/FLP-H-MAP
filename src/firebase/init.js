import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCe2PAeoDPuqBQJ-ZmZZNyhM_tbikN6vMY",
  authDomain: "h-map-ced51.firebaseapp.com",
  databaseURL: "https://h-map-ced51.firebaseio.com",
  projectId: "h-map-ced51",
  storageBucket: "h-map-ced51.appspot.com",
  messagingSenderId: "992068579706"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()