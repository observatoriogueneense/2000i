const mongoose = require('mongoose');

const AdmSchema = new mongoose.Schema({
    setu:String,
    sets:String
},
    {timestamps: true}
);

module.exports = mongoose.model("Adm", AdmSchema);