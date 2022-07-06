var express = require('express');
var app = express();

const PORT = 3000;

// Launching express on local host 3000

let movies = [
    {name: "Kill Bill vol 1", year: 2003},
    {name: "Mortal Kombat", year: 1995},
    {name: "Star Wars: A new hope", year: 1977},
    {name: "Back To The Future", year: 1985},
    {name: "Independance Day", year: 1996}
]

let IndependanceDayActors = [
    {name: "Will Smith"},
    {name: "Jeff Goldblum"},
    {name: "Bill Pullman"},
    {name: "Vivica A. Fox"},
    {name: "Dean Devlin"},
    {name: "Judd Hirsch"},
    {name: "Randz Quaid"},
    {name: "Margaret Colin"},
    {name: "Robert Loggia"},
    {name: "Brent Spiner"},
    {name: "Mae Whitman"},

]

let MortalKombatActors = [
    {name: "Robin Shou", character: "liu Kang"},
    {name: "Christopher Lambert", character: "Raiden"},
    {name: "Linden Ashby", character: "Johnny Cage"},
    {name: "Cary-Hiroyuki Tagawa", character: "Shang Tsung"},
    {name: "Bridgette Wilson", character: "Sonya Blade"},
    {name: "Talisa Soto", character: "Kitana"},
    {name: "Trevor Goddard", character: "Kano"},
    {name: "François Petit", character: "Kuai Liang"},
    {name: "Chris Casamassa", character: "Scorpion"},
    {name: "Keith Cooke", character: "Reptile"}

]

app.get('/movies', (req,res)=> {
    res.send(movies)
});

app.get('/movies/independance-day/actors', (req, res) => {
    res.send(IndependanceDayActors)
});

app.get('/movies/mortal-kombat/actors', (req, res) => {
    res.send(MortalKombatActors)
});

//requesting arrays using HTTP

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});

