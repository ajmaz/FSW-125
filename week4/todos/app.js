const express = require('express')
const app = express()
const PORT = 3000

//Require file containing function which returns a router
const todoListRouter = require('./todolist.js')

// Some middleware defines
var logging = (req, res, next) => {
    console.log("MIDDLEWARE: " + req.method + " " + req.url + " " + res.statusCode)
    next()
}

// Middleware
app.use(logging)
app.use(express.json())

// Routes
app.use('/tasks', todoListRouter)

// Server start
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});
