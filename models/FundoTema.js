const mongoose = require('mongoose');

const FundoTemaSchema = new mongoose.Schema({
    img:String,
    title:String,
    text1:String,
    text2:String
},
    {timestamps: true}
);

module.exports = mongoose.model("FundoTema", FundoTemaSchema);