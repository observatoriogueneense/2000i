const express = require('express')
const router = express.Router()
const Tema = require('../models/Tema')
// const _ = require("underscore")


router.get("/", async(req, res)=>{
    try {
        const response = await Tema.find();
        const reverseRes = response.reverse()
        res.status(200).json(reverseRes )
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.get("/private", async(req, res)=>{
    try {
        const response = await Tema.find({status:false});
        const reverseRes = response.reverse()
        res.status(200).json(reverseRes )
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.get("/public", async(req, res)=>{
    try {
        const response = await Tema.find({status:true});
        const reverseRes = response.reverse()
        res.status(200).json(reverseRes )
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/", async(req, res)=>{
    try {
        const newData = new Tema(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/:id", async(req, res)=>{
    try {
        await Tema.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.put("/private/:id", async(req, res)=>{
    try {
        await Tema.findByIdAndUpdate(req.params.id, {status: false})
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.put("/public/:id", async(req, res)=>{
    try {
        await Tema.findByIdAndUpdate(req.params.id, {status: true})
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await Tema.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})

module.exports = router;