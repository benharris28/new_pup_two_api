const path = require('path')
const express = require('express')
const FoodService = require('./food-service')

const foodRouter = express.Router()
const jsonBodyParser = express.json()

foodRouter
.route('/')
.get((req, res, next) => {
  
    
    FoodService.getAllFood(
        req.app.get('db')
    )
    .then(food => {
        res.json(food)
    })
    .catch(next)
})
.post(jsonBodyParser, (req, res, next) => {
    const { brand, product, category, image, rating, number_of_ratings, cost_large_dog, cost_medium_dog, cost_small_dog, purchase_text, description_text, link } = req.body;

    const newFood = { 
        brand, 
        product, 
        category, 
        image, 
        rating, 
        number_of_ratings, 
        cost_large_dog, 
        cost_medium_dog, 
        cost_small_dog, 
        purchase_text, 
        description_text, 
        link
    } 

    FoodService.insertFood(
        req.app.get('db'),
        newFood
    )
        .then(food => {
            res
                .status(201)
                .location(path.posix.join(req.originalUrl))
                .json(food)
        })
        .catch(next) 
})

module.exports = foodRouter;