const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/musicians',async(req, res) => {
 const data = await Musician.findAll();
 res.json(data);
})

app.get('/musicians/:id', async(req, res) => {
    const data = await Musician.findByPk(req.params.id);
    res.json(data);
})

app.post('/musicians', async(req,res) =>{
    let data = await Musician.create(req.body);
    res.json(data);
})

app.put('/musicians/:id', async(req,res) =>{
    let data = await Musician.findByPk(req.params.id);
    data.name = req.body.name;
    data.instrument = req.body.instrument;
    await data.save();
    res.json(data)
})

app.delete('/musicians/:id', async(req,res) =>{
    let data = await Musician.findByPk(req.params.id);
    await data.destroy();
    res.send(res.statusCode);
})



app.get('/bands', async (req,res) => {
const data = await Band.findAll();
res.json(data);
})







module.exports = app;