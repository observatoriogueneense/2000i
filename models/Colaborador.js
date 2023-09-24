const mongoose = require('mongoose');

const ColaboradorSchema = new mongoose.Schema({
    nome:String,
    funcao:String,
    img:String,
    desc:String,
    link:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Colaborador", ColaboradorSchema);