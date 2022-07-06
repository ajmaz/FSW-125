var express = require('express')
var app = express()
const port = 3000

app.get('/', function (req, res) {
    console.log("TESTING GET")
    res.send('Hello World!!')
})

app.post('/', function (req, res) {
    console.log("TESTING POST")
    res.send('Hello World!! - from post')
})

app.get('/test', function (req, res) {
    console.log("TESTING GET")
    res.send('Hello World!! -from GET')
})

app.get('/test/hello/:id', function (req, res) {
    console.log("TESTING GET")
    res.send('Hello World!! -from GET test/hello : ' + req.params.id)
})


app.listen(port, () => console.log(`Example app listening on port ${port} !`))

