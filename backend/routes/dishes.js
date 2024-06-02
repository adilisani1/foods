const express = require('express');
const Dishes = require('../models/dish');
const dishRouter = express.Router();

dishRouter.get("/dishes", async (req, res) => {
    const dishes = await Dishes.find({})
    res.status(201).json(dishes);
})

dishRouter.post('/dishes', async (req, res, next) => {
    try {
        const dishes = await Dishes.create(req.body);
        const saveDish = await dishes.save();
        res.status(201).json(saveDish)
    } catch (error) {
        res.status(404).json(error)
    }
});

module.exports = dishRouter;