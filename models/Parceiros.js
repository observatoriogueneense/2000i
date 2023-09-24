const mongoose = require('mongoose');

const ParceirosSchema = new mongoose.Schema({
    title:String,
    img:String,
    desc:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Parceiros", ParceirosSchema);