const express = require('express')
const teamRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


let teams = [
    {"city": "New York", "name": "Yankees", "teamId": uuidv4()},
    {"city": "New York", "name": "Mets", "teamId": uuidv4()},
    {"city": "Chicago", "name": "Bears", "teamId": uuidv4()},
    {"city": "Arizona", "name": "Cardinals", "teamId": uuidv4()},
]

teamRouter
    //Get All
    .get('/',(req, res) => {
        console.log("GETTING ALL...")
        res.send(teams)
    })

    //Get One Team
    .get("/:teamId", (req,res) => {
        const teamId = req.params.teamId
        const singleTeam = teams.find(team => team._id === teamId)
        console.log("GETTING ONE...")
        res.send(singleTeam)
    })

    //Add Team
    .post("/", (req, res, next) => {
        const newTeam = req.body
        newTeam._id = uuidv4()
        teams.push(newTeam)
        console.log("Adding team..")
        res.send(newTeam)
    })

    // edit/update team
    .put("/:teamId", (req, res, next) => {
        let id = req.params.id
        let teamIndex = teams.findIndex(teams => teams._id === id)
        Object.assign(teams[teamIndex], req.body)
        console.log("PUTTING")
        res.send(teams[teamIndex])
    })

    // DELETE
    .delete("/:teamId", (req, res, next) => {
        let id = req.params.id
        let teamIndex = teams.findIndex(teams => teams._id === id)
        teams.splice(teamIndex, 1)
        console.log("DELETING")
        res.send("Item was deleted!")
    })


module.exports = teamRouter
