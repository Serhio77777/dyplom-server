const express = require('express')
const router = express.Router()
const userService = require('./service')
const validate = require('../middleware/validate-middleware')
const userValidator = require('./validator')

router.get('/users', (req, res, next) => {
    userService.getUserProfile(req.body).then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/login', (req, res, next) => {
    userService.getUserProfile(req.body).then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/registration', (req, res, next) => {
    userService.createUserProfile(req.body).then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/user/:id', (req, res, next) => {
    userService.getUserProfile(req.body, req.params.id).then((user) => {
      res.json(user)
    })
    .catch(next)
})

module.exports = router