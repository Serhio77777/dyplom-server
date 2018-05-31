const express = require('express')
const user = require('./user/routes')
// const authorization = require('./authorization/routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

require('./datastore/db')

const app = express()

console.log('♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠')
console.log('♦♦♦♦♦♦  Server is ready for usage  ♦♦♦♦♦♦')
console.log('♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥')
console.log('♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥')

app.use(cors())

app.use(bodyParser.text())
app.use(bodyParser.json())
// app.use(passport.initialize())

app.use('/api/v1/', user)

app.use((req, res, next) => {
    const err = new Error(`Not Found ${req.path}`)
    err.status = 404
    next(err)
})
  
app.use((error, req, res, next) => {
    if (error.errors) {
      return res.status(400).json({
        error: {
          name: error.name,
          errors: error.errors
        }
      })
    }
    next(error)
})
  
module.exports = app
  