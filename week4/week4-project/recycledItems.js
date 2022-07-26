
const express = require('express')
// This is a router object
const recycledItems = express.Router()

// Needed for unique id piece
const { v4: uuidv4 } = require('uuid')

// Fake data
let items = [
    {
        "name": "Mixed Paper",
        "description": "mixed Paper",
        "recyclable": true,
        "quantity": 1000,
        "price": 0,
        "_id": uuidv4()
    },
    {
        "name": "Metal",
        "description": "metal",
        "recyclable": true,
        "quantity": 200,
        "price": "$0.10 per pound",
        "_id": uuidv4()
    },
    {
        "name": "Glass",
        "description": "glass",
        "recyclable": true,
        "quantity": 0,
        "price": 0,
        "_id": uuidv4()
    },
    {
        "name": "Plastics",
        "description": "plastics",
        "recyclable": true,
        "quantity": 55000,
        "price": 0,
        "_id": uuidv4()
    }
]

recycledItems
    //http://localhost:3000/items (GET All)
    .get("/", (req, res, next) => {
        res.send(items)
    })
    //http://localhost:3000/items/:id (GET one)
    .get("/:id", (req, res, next) => {
        let id = req.params.id
        let item = items.find(item => item._id === id)
        console.log("GET /items/" + id)
        res.send(item)
    })
    //http://localhost:3000/items/:id (GET some)
    .get("/search/description", (req, res, next) => {
        let itemDescription = req.query.description
        let filteredItems = items.filter(filteredItems => filteredItems.description === itemDescription)
        res.send(filteredItems)
    })

    //http://localhost:3000/items/ (POST)
    .post("/", (req, res, next) => {
        const newItem = req.body
        newItem._id = uuidv4()
        items.push(newItem)
        console.log("POST /items/ new item added!")
        res.send("Items was ADDED!")
    })

    .put("/:id", (req, res, next) => {
        let id = req.params.id
        let itemIndex = items.findIndex(items => items._id === id)
        Object.assign(items[itemIndex], req.body)
        console.log("PUT /items/" + id)
        res.send("Item was updated!")
    })

    .delete("/:id", (req, res, next) => {
        let id = req.params.id
        let itemIndex = items.findIndex(items => items._id === id)
        items.splice(itemIndex, 1)
        console.log("DELETE /item/" + id)
        res.send("Item was deleted!")
    })



module.exports = recycledItems
