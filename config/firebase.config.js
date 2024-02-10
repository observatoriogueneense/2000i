// const firebaseConfig =  {
//     apiKey: "AIzaSyA5aH7-v3BQ5K_KJahUCZd6CJw0VjotF1w",
//     authDomain: "cgad-73191.firebaseapp.com",
//     projectId: "cgad-73191",
//     storageBucket: "cgad-73191.appspot.com",
//     messagingSenderId: "770292682261",
//     appId: "1:770292682261:web:d6f539c5e902a9fc75081c",
//     measurementId: "G-STH8YK16RF"
// }
require('dotenv').config()
const firebaseConfig =  {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  databaseURL: process.env.FIRESTORE_DB_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

module.exports = {
  firebaseConfig
}