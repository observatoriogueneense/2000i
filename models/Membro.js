const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
    nome:String,
    funcao:String,
    img:String,
    desc:String,
    link:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Membro", MembroSchema);