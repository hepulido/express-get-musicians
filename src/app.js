const express = require("express");
const app = express();
const { Band } = require("../models/index")
const musicianRouter = require("./routes/musicians")


app.use(express.json())
app.use("/musicians", musicianRouter)
app.use(express.urlencoded({extended: true}))











module.exports = app;