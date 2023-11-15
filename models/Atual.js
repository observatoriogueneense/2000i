const mongoose = require('mongoose');

const AtualSchema = new mongoose.Schema({
    title:String,
    img:String,
    local:String,
    text:String,
    status:{ type: Boolean, default: false }
},
    {timestamps: true}
);

module.exports = mongoose.model("Atual", AtualSchema);