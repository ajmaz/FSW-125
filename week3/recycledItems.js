
const express = require('express')
// This is a router object
const recycledItems = express.Router()

// Needed for unique id piece
const { v4: uuidv4 } = require('uuid')

// Fake data
let items = [
    {
        "name": "",
        "description": "",
        "recyclable": "",
        "quantity": "",
        "price": "",
        "_id": uuidv4()
    }
]

recycledItems
    //http://localhost:3000/items (GET)
    .get("/", (req, res, next) => {
        res.send(items)
    })
    //http://localhost:3000/items/:id (GET)
    .get("/:id", (req, res, next) => {
        let id = req.params.id
        let team = items.find(team => team._id === id)
        console.log("GET /items/" + id)
        res.send(team)
    })
    //http://localhost:3000/items/ (POST)
    .post("/", (req, res, next) => {
        const newItem = req.body
        newItem._id = uuidv4()
        items.push(newItem)
        console.log("POST /items/ new item added!")
        res.send("Items was ADDED")
    })

module.exports = recycledItems
