import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyC7Q4TVMTn89R8QId5RvI6A4sN7ydRglw8",
    authDomain: "upliftingquotes-8b7f3.firebaseapp.com",
    databaseURL: "https://upliftingquotes-8b7f3.firebaseio.com",
    projectId: "upliftingquotes-8b7f3",
    storageBucket: "",
    messagingSenderId: "161106304548"
  };
  firebase.initializeApp(config);
  const database = firebase.database();

export default database;