const { Router } = require('express');
const express = require('express');
const { remove } = require('../models/Home');
const homeRouter = express.Router();
const Home = require('../models/Home');


//Gets back all the drinks
homeRouter.get('/', async (req, res) =>{
    try {
        const drinks = await Home.find();
        res.json(drinks); 
    } catch (error) {
         res.json({ message: error })
    }
});
//Submits a drink
homeRouter.post('/', async (req, res) => {
    const drink = new Home({
        drink: req.body.drink,
    });
    try {
       const savedDrink = await drink.save()
       res.json(savedDrink); 
    } catch (error) {
        res.json({ meesage: error });
    }
});
//Specific Drink
homeRouter.get('/:drinkId', (req, res) =>{
    
});
//Deletes a Drink
homeRouter.delete('/:drinkId', async (req, res) => {
    try {
        const deleteDrink = await Home.remove(req.params.drinkId)
        res.json(deleteDrink)
    } catch (error) {
        res.json({ message: error })
    }
})
module.exports = homeRouter;