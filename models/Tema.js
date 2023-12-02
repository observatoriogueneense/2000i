const mongoose = require('mongoose');

const TemaSchema = new mongoose.Schema({
    title:String,
    img:String,
    obj:String,
    status:{ type: Boolean, default: false }
},
    {timestamps: true}
);

module.exports = mongoose.model("Tema", TemaSchema);