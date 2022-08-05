const express = require('express')
const teamsRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


let teams = [
    {"city": "New York", "name": "Yankees", "teamId": uuidv4()},
    {"city": "New York", "name": "Mets", "teamId": uuidv4()},
    {"city": "Chicago", "name": "Bears", "teamId": uuidv4()},
    {"city": "Arizona", "name": "Cardinals", "teamId": uuidv4()},
]

teamsRouter
    //Get All
    .get('/',(req, res) => {
        console.log("GETTING ALL...")
        res.send(teams)
    })


module.exports = teamsRouter