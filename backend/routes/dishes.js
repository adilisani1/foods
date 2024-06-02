const express = require('express');
const Dishes = require('../models/dish');
const dishRouter = express.Router();

dishRouter.get("/dishes", async (req, res) => {
    try {
        const dishes = await Dishes.find({});
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve dishes' });
    }
});

dishRouter.post('/dishes', async (req, res) => {
    try {
        const dish = await Dishes.create(req.body);
        res.status(201).json(dish);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = dishRouter;