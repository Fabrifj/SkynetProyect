require("firebase/firestore");

var admin = require("firebase-admin");
var serviceAccount = require("../eviroment/skynet-database-firebase-adminsdk-j0a8d-91c982790a.json");

class firabase{
    constructor(){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://skynet-database.firebaseio.com"
          });
    }




}module.exports = firabase;
