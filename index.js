require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./db')

const Principal = require('./routes/Principal')
const Sobre = require('./routes/Sobre')
const Tema = require('./routes/Tema')
const Atual = require('./routes/Atual')
const Contato = require('./routes/Contato')
const Parceiros = require('./routes/Parceiros')
const Adm = require('./routes/Adm')
const BannerTema = require('./routes/BannerTema')
const BannerParceria = require('./routes/BannerParceria')
const Logo = require('./routes/Logo')
const Img = require('./routes/Img')
const Fundo = require('./routes/Fundo')
const FundoTema = require('./routes/FundoTema')
//const uploadRouter  = require("./controllers/upload-file.controller");

const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");
// const config = require("../config/firebase.config")
const { v4: uuidv4 } = require('uuid');


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "/*");
    res.header("Access-Control-Allow-Methods", 'GET,POST','PUT','DELETE');
    app.use(cors())
    next();
})
app.use(cors())

// const uploadRouter = require('./Image');



app.get("/", (req, res)=>{
    res.json({data: process.env.API_KEY})

})

//Initialize a firebase application
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
const config = {
    firebaseConfig
}

initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("filename"), async (req, res) => {
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

app.use("/home", Principal)
app.use("/sobre", Sobre)
app.use("/tema", Tema)
app.use("/atual", Atual)
app.use("/contato", Contato)
app.use("/parceiros", Parceiros)
app.use("/adm", Adm)
app.use("/bannertema", BannerTema)
app.use("/bannerparceria", BannerParceria)
app.use("/logo", Logo)
app.use("/img", Img)
app.use("/fundo", Fundo)
app.use("/fundotema", FundoTema)

const port = process.env.PORT
app.listen(port, console.log("Servidor funcionando!", port))