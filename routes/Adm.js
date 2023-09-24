const express = require('express')
const router = express.Router()
const Adm = require('../models/Adm')
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');


const verifyTokenUser = (req, res, next)=>{
    const token = req.body.path;
    var setu = null
    if(token){
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) res.status(200).json({setu: null})
            req.user=user;
            next();
        })
    }else{
        return res.status(200).json({setu: null})
    }
}


router.post("/getuser", verifyTokenUser, async(req, res)=>{
    try {
        // const response = await Adm.find();
        // const reverseRes = response.reverse()
        const ID = req.user
        res.status(200).json(ID)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/", async(req, res)=>{
    try {
        var setu = null;
        var sets = null;

        if(req.body.setu && req.body.sets){
            const salt = await bcrypt.genSalt(10);
            setu = await bcrypt.hash(req.body.setu, salt);
            sets = await bcrypt.hash(req.body.sets, salt);
        }

        const Abody = new Adm({
            setu,
            sets
        })

        await Abody.save()

        res.status(200).json("Salvo com Sucesso!")
    } catch (error) {
        res.json(error.message)
    }
})
router.post("/login", async(req, res)=>{
    try {
        var getBody = await Adm.find();

        var validatedSetu = false;
        var validatedSets = false;
        var accessToken = null;
        if(req.body.setu && req.body.sets){
            validatedSetu = await bcrypt.compare(req.body.setu, getBody[0].setu);
            validatedSets = await bcrypt.compare(req.body.sets, getBody[0].sets);
        }

        
        if(validatedSetu && validatedSets){
            accessToken = jwt.sign({
                setu: req.body.setu,
            }, process.env.JWT_SEC)
        }
        res.status(200).json({token:accessToken})
    } catch (error) {
        res.json(error.message)
    }
})


router.put("/:id", async(req, res)=>{
    try {
        await Adm.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await Adm.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})


module.exports = router;