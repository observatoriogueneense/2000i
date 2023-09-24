const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    header:String,
    missao:String,
    visao:String,
    valor:String,
    imissao:String,
    ivisao:String,
    ivalor:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Home", HomeSchema);