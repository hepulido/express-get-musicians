const { Router } = require ("express");
const bandRouter = Router();
const { Band } = require("../models/index")



bandRouter.get('/bands', async (req,res) => {
    const data = await Band.findAll();
    res.json(data);
    })