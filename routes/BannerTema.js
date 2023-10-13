const express = require('express')
const router = express.Router()
const BannerTema = require('../models/BannerTema')
// const _ = require("underscore")


router.get("/", async(req, res)=>{
    try {
        const response = await BannerTema.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})

router.post("/", async(req, res)=>{
    try {
        const newData = new BannerTema(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/:id", async(req, res)=>{
    try {
        await BannerTema.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await BannerTema.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})

module.exports = router;