const express = require('express')
const router = express.Router()
const Atual = require('../models/Atual')
// const _ = require("underscore")


router.get("/", async(req, res)=>{
    try {
        const response = await Atual.find();
        const reverseRes = response.reverse()
        res.status(200).json(reverseRes )
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.get("/:id", async(req, res)=>{
    try {
        const response = await Atual.findById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/", async(req, res)=>{
    try {
        const newData = new Atual(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/:id", async(req, res)=>{
    try {
        await Atual.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await Atual.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})

module.exports = router;