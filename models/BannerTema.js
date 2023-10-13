const mongoose = require('mongoose');

const BannerTemaSchema = new mongoose.Schema({
    title:String,
    img:String,
    desc:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("BannerTema", BannerTemaSchema);