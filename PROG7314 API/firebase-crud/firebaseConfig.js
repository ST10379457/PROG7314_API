const admin = require("firebase-admin");
const serviceAccount = require("./prog7314poe-b3030-firebase-adminsdk-fbsvc-36407c9a43.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prog7314poe-b3030-default-rtdb.europe-west1.firebasedatabase.app/"
});

const db = admin.database();
module.exports = db;