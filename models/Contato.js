const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    email:String,
    cell:String,
    endereco:String,
    facebook:String,
    instagram:String,
    youtube:String,
    twitter:String,
    slogan:String
},
    {timestamps: true}
);

module.exports = mongoose.model("Contato", ContatoSchema);