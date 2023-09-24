const mongoose = require('mongoose');

const SobreSchema = new mongoose.Schema({
    history:String
},
    {timestamps: true}
);

module.exports = mongoose.model("Sobre", SobreSchema);