import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC7MihITGDmDq9M0v1C-z-lApeEkSThGxU",
    authDomain: "tasks-43f03.firebaseapp.com",
    databaseURL: "https://tasks-43f03.firebaseio.com",
    projectId: "tasks-43f03",
    storageBucket: "tasks-43f03.appspot.com",
    messagingSenderId: "665580235644"
  };

  export const firebaseImpl = firebase.initializeApp(config);
  export const firebaseDatabase = firebase.database();