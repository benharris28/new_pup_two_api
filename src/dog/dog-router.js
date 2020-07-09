const path = require('path')
const express = require('express')
const DogService = require('./dog-service')

const dogRouter = express.Router()
const jsonBodyParser = express.json()

dogRouter
.route('/')
.get(jsonBodyParser, (req, res, next) => {
    const { id } = req.body;
    
    DogService.getById(
        req.app.get('db'),
        id
    )
    .then(dog => {
        res.json(dog)
    })
    .catch(next)
})

module.exports = dogRouter;