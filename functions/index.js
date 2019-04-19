
const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("firebase_config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://authenticate-app-3a8e7.firebaseio.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Firebase learning in Nugen");
});




exports.createUser = functions.https.onRequest((request,response)=>{
    admin.auth().createUser({}).then((userRecord)=>{
        response.send(userRecord);
    })
    .catch((err)=>{
        response.send(err);
    })
});