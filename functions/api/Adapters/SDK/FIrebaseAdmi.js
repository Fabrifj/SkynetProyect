var admin = require("firebase-admin");

var serviceAccount = {
    apiKey: "AIzaSyDbs5lsI8DF-9Hv862H687s25VZAbOiuXA",
    authDomain: "skynet-database.firebaseapp.com",
    databaseURL: "https://skynet-database.firebaseio.com",
    projectId: "skynet-database",
    storageBucket: "skynet-database.appspot.com",
    messagingSenderId: "280636411489",
    appId: "1:280636411489:web:706c005efd19dbcf6f6420"
  };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://microcolegio.firebaseio.com"
});