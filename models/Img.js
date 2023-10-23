const mongoose = require('mongoose');

const ImgSchema = new mongoose.Schema({
    img:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Img", ImgSchema);