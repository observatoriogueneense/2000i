const express = require("express");
const router = express.Router();
const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");
// const config = require("../config/firebase.config")
const { v4: uuidv4 } = require('uuid');


//Initialize a firebase application
const firebaseConfig =  {
    apiKey: "AIzaSyA5aH7-v3BQ5K_KJahUCZd6CJw0VjotF1w",
    authDomain: "cgad-73191.firebaseapp.com",
    projectId: "cgad-73191",
    storageBucket: "cgad-73191.appspot.com",
    messagingSenderId: "770292682261",
    appId: "1:770292682261:web:d6f539c5e902a9fc75081c",
    measurementId: "G-STH8YK16RF"
  }
const config = {
    firebaseConfig
}

initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("filename"), async (req, res) => {
    try {
        const dateTime = uuidv4();

        const storageRef = ref(storage, `files/${req.file.originalname + "       " + dateTime}`);

        // Create file metadata including the content type
        const metadata = {
            contentType: req.file.mimetype,
        };

        // Upload the file in the bucket storage
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        const downloadURL = await getDownloadURL(snapshot.ref);

        res.status(200).json(downloadURL)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;