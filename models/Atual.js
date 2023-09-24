const mongoose = require('mongoose');

const AtualSchema = new mongoose.Schema({
    title:String,
    img:String,
    local:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Atual", AtualSchema);