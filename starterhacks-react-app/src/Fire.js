import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC1jgLtgTsBpAPJAYZ8hMzA8z_X5zj8yZU",
  authDomain: "starter-ba2c5.firebaseapp.com",
  databaseURL: "https://starter-ba2c5.firebaseio.com",
  projectId: "starter-ba2c5",
  storageBucket: "starter-ba2c5.appspot.com",
  messagingSenderId: "707596632344",
  appId: "1:707596632344:web:1c027dd95d372da1775e6d",
  measurementId: "G-EM6DJ9GVZ9"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire
