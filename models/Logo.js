const mongoose = require('mongoose');

const LogoSchema = new mongoose.Schema({
    img:String,
    text1:String,
    text2:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Logo", LogoSchema);