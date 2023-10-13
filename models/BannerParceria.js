const mongoose = require('mongoose');

const BannerParceriaSchema = new mongoose.Schema({
    title:String,
    img:String,
    desc:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("BannerParceria", BannerParceriaSchema);