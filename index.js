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

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "/*");
    res.header("Access-Control-Allow-Methods", 'GET,POST','PUT','DELETE');
    app.use(cors())
    next();
})
app.use(cors())

const uploadRouter = require('./Image');


app.get("/", (req, res)=>{
    res.send("CGAD")
})

app.use("/upload", uploadRouter);
app.use("/home", Principal)
app.use("/sobre", Sobre)
app.use("/tema", Tema)
app.use("/atual", Atual)
app.use("/contato", Contato)
app.use("/parceiros", Parceiros)
app.use("/adm", Adm)

const port = process.env.PORT
app.listen(port, console.log("Servidor funcionando!", port))