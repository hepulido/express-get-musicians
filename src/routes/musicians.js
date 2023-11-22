const { Router } = require ("express");
const musicianRouter = Router();
const { Musician} = require("../../models/index")



musicianRouter.use(express.json())
musicianRouter.use(express.urlencoded({extended: true}))

musicianRouter.get('/musicians',async(req, res) => {
 const data = await Musician.findAll();
 res.json(data);
})

musicianRouter.get('/musicians/:id', async(req, res) => {
    const data = await Musician.findByPk(req.params.id);
    res.json(data);
})

musicianRouter.post('/musicians', async(req,res) =>{
    let data = await Musician.create(req.body);
    res.json(data);
})

musicianRouter.put('/musicians/:id', async(req,res) =>{
    let data = await Musician.findByPk(req.params.id);
    await data.update(req.body)
    res.json(data)
})

musicianRouter.delete('/musicians/:id', async(req,res) =>{
    let data = await Musician.findByPk(req.params.id);
    await data.destroy();
    res.send(res.statusCode);
})

module.export = musicianRouter;