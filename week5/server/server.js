const express = require('express')
const teamItems = require('./Routes/teamsRouter')

const app = express()
const PORT = 9000

//Middleware
app.use(express.json())

//Routes
app.use('/teams', teamItems)

//Server Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})