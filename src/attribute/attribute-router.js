const path = require('path')
const express = require('express')
const AttributeService = require('./attribute-service')

const attributeRouter = express.Router()
const jsonBodyParser = express.json()

attributeRouter
.route('/')
.get(jsonBodyParser, (req, res, next) => {
    const { id } = req.body;
    
    AttributeService.getById(
        req.app.get('db'),
        id
    )
    .then(dog => {
        res.json(dog)
    })
    .catch(next)
})

module.exports = attributeRouter;