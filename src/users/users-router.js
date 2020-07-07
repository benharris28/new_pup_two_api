const path = require('path')
const express = require('express')
const UsersService = require('./users-service')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

usersRouter
.route('/')
.get(jsonBodyParser, (req, res, next) => {
    const { id } = req.body;
    
    UsersService.getById(
        req.app.get('db'),
        id
    )
    .then(user => {
        res.json(user)
    })
    .catch(next)
})
.post(jsonBodyParser, (req, res, next) => {
    const { email, password } = req.body

    for (const field of ['email', 'password'])
        if (!req.body[field])
            return res.status(400).json({
                error: `Missing '${field}' in request body`
            })
    
    const passwordError = UsersService.validatePassword(password)

    if (passwordError)
        return res.status(400).json({ error: passwordError })

    UsersService.hasUserWithEmail(
        req.app.get('db'),
        email
    )
    .then(hasUserWithEmail => {
        if(hasUserWithEmail) 
            return res.status(400).json({ error: `Username already taken`})
        
            
    

    return UsersService.hashPassword(password)
        .then(hashedPassword => {
            const newUser = {
                email,
                password: hashedPassword,
                date_created: 'now()'
            }
        
    
    return UsersService.insertUser(
        req.app.get('db'),
        newUser
    )
    .then(user => {
        console.log(user)
        res
            .status(201)
            .location(path.posix.join(req.originalUrl))
            .json(UsersService.serializeUser(user))
        }) 
    })
})
    .catch(next) 

})

usersRouter
.route('/:id')
.get((req, res, next) => {
    const { id } = req.params;
    
    UsersService.getById(
        req.app.get('db'),
        id
    )
    .then(user => {
        res.json(user)
    })
    .catch(next)
})
.patch(jsonBodyParser, (req, res, next) => {
    const { product_complete, food_complete, housetrain_complete, feeding_complete, tricks_complete, pickup_complete, prephome_complete, dog_name, breed, home_date, dog_birthday } = req.body;
    const userUpdate = { product_complete, food_complete, housetrain_complete, feeding_complete, tricks_complete, pickup_complete, prephome_complete, dog_name, breed, home_date, dog_birthday  }
    console.log(req.body)
    
    UsersService.markComplete(
        req.app.get('db'),
        req.params.id,
        userUpdate
    )
    .then(numRowsAffected => {
        
        res.status(204).end()
    })
    .catch(next)
})

module.exports = usersRouter;