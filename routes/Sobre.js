const express = require('express')
const router = express.Router()
// const Home = require('../models/home')
const Sobre = require('../models/sobre')
const Membro = require('../models/Membro')
const Colaborador = require('../models/Colaborador')

router.get("/", async(req, res)=>{
    try {
        const response = await Sobre.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/", async(req, res)=>{
    try {
        const newData = new Sobre(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/:id", async(req, res)=>{
    try {
        await Sobre.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/:id", async(req, res)=>{
    try {
        await Sobre.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.get("/colaborador", async(req, res)=>{
    try {
        const response = await Colaborador.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/colaborador", async(req, res)=>{
    try {
        const newData = new Colaborador(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/colaborador/:id", async(req, res)=>{
    try {
        await Colaborador.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/colaborador/:id", async(req, res)=>{
    try {
        await Colaborador.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.get("/membro", async(req, res)=>{
    try {
        const response = await Membro.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json("Erro na Execução!")
    }
})
router.post("/membro", async(req, res)=>{
    try {
        const newData = new Membro(req.body);
        await newData.save()
        res.status(200).json("Cadastrado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao cadastrar!")
    }
})
router.put("/membro/:id", async(req, res)=>{
    try {
        await Membro.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json("Editado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})
router.delete("/membro/:id", async(req, res)=>{
    try {
        await Membro.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json("Erro ao Editar!")
    }
})


module.exports = router;