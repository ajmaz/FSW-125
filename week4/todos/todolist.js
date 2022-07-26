
const express = require('express')
// This is a router object
const todoList = express.Router()

// Needed for unique id piece
const { v4: uuidv4 } = require('uuid')

// Fake data
let tasks = [
    {
        "task": "yard work",
        "description": "mow front and back yard",
        "completed": true,
        "_id": uuidv4()
    },
    {
        "task": "Laundry",
        "description": "Wash colored and white laundry",
        "completed":false,
        "_id": uuidv4()
    },
    {
        "task": "Indoor chores",
        "description": "change light bulbs",
        "completed": true,
        "_id": uuidv4()
    },
    {
        "task": "grocery shopping",
        "description": "check grocery list",
        "completed": false,
        "_id": uuidv4()
    }
]

todoList
    //http://localhost:3000/items (GET All)
    .get("/", (req, res, next) => {
        res.send(tasks)
    })
    //http://localhost:3000/items/:id (GET one)
    .get("/:id", (req, res, next) => {
        let id = req.params.id
        let task = tasks.find(task => task._id === id)
        console.log("GET /tasks/" + id)
        res.send(task)
    })
    //http://localhost:3000/items/:id (GET some)
    .get("/search/description", (req, res, next) => {
        let taskDescription = req.query.description
        let filteredTasks = tasks.filter(filteredTasks => filteredTasks.description === taskDescription)
        res.send(filteredTasks)
    })

    //http://localhost:3000/items/ (POST)
    .post("/", (req, res, next) => {
        const newTask = req.body
        newTask._id = uuidv4()
        tasks.push(newTask)
        console.log("POST /tasks/ new item added!")
        res.send("Task was ADDED!")
    })

    .put("/:id", (req, res, next) => {
        let id = req.params.id
        let taskIndex = tasks.findIndex(items => items._id === id)
        Object.assign(tasks[taskIndex], req.body)
        console.log("PUT /tasks/" + id)
        res.send("Task was updated!")
    })

    .delete("/:id", (req, res, next) => {
        let id = req.params.id
        let taskIndex = tasks.findIndex(tasks => tasks._id === id)
        tasks.splice(taskIndex, 1)
        console.log("DELETE /task/" + id)
        res.send("Task was deleted!")
    })



module.exports = todoList
