const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.get('/musicians',async(req, res) => {
 const data = await Musician.findAll();
 res.json(data);
})
app.get('/musicians/1',async(req, res) => {
    const data = await Musician.findOne();
    res.json(data);
   })

app.get('/bands', async (req,res) => {
const data = await Band.findAll();
res.json(data);
})







module.exports = app;