var fireadmin = require("firebase-admin");
var serviceAccount = require("../eviroment/skynet-database-firebase-adminsdk-j0a8d-91c982790a.json");


fireadmin.initializeApp({
            credential: fireadmin.credential.cert(serviceAccount),
            databaseURL: "https://skynet-database.firebaseio.com"
});
module.exports = fireadmin;
