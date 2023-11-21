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



app.get('/bands', async (req,res) => {
const data = await Band.findAll();
res.json(data);
})







module.exports = app;