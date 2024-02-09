var express = require('express');
var app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/notes.html'))
})

app.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = app;