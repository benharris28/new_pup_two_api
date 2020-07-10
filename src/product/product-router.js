const path = require('path')
const express = require('express')
const ProductService = require('./product-service')
const DogService = require('../dog/dog-service')

const productRouter = express.Router()
const jsonBodyParser = express.json()

productRouter
.route('/')
.get((req, res, next) => {
    const active = true
    

    ProductService.getProductsForDog(
        req.app.get('db'),
        active
    )
    .then(products => {
        res.json(products)
    })
    .catch(next)
})
.post(jsonBodyParser, (req, res, next) => {
    const { active, image, product, brand, category, cost_large_dog, cost_medium_dog, cost_small_dog, purchase_text, description_text, canada_link, us_link } = req.body;

    const newProduct = { 
        active: false, 
        image, 
        product, 
        brand, 
        category, 
        cost_large_dog, 
        cost_medium_dog, 
        cost_small_dog, 
        purchase_text, 
        description_text, 
        canada_link, 
        us_link 
    } 

    ProductService.insertProduct(
        req.app.get('db'),
        newProduct
    )
        .then(product => {
            res
                .status(201)
                .location(path.posix.join(req.originalUrl))
                .json(product)
        })
        .catch(next) 
})

productRouter
.route('/:id')
.get(jsonBodyParser, (req, res, next) => {
    const { id } = req.params;
    
    ProductService.getById(
        req.app.get('db'),
        id
    )
    .then(product => {
        res.json(product)
    })
    .catch(next)
})

productRouter
.route('/fordog/:dog_id')
.get(jsonBodyParser, (req, res, next) => {
    const { dog_id } = req.params;
    
   
    
    ProductService.getProductsForDogs(
        req.app.get('db'),
        dog_id
    )
    .then(product => {
        res.json(product)
    })
    .catch(next)
})




module.exports = productRouter;