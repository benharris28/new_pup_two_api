const path = require('path')
const express = require('express')
const MapService = require('./map-service')
const geocoder = require('../middleware/geocoder')

const mapRouter = express.Router()
const jsonBodyParser = express.json()

mapRouter
.route('/')
.get(jsonBodyParser, (req, res, next) => {
  
    const { lat, lng } = req.query
    const { address } = req.body
    
 

    
    MapService.getMarkers(
        req.app.get('db'),
        lat,
        lng
    )
    .then(markers => {
        res.json(markers)
    })
    .catch(next)
})

mapRouter
.route('/test')
.get(jsonBodyParser, (req, res, next) => {
  
    const { address } = req.body
    console.log(address)

    // if not lat or lng, run the geocoder
    const addressToGeocode = address
      
       geocoder.geocode('39 Tyrrel Avenue Toronto')
            .then(res => {
                const lat = res.latitude;
                const lng = res.longitude;
                console.log(lat)
                .json(res)

            })
                
                
               
            .catch(next)
            


})


module.exports = mapRouter;