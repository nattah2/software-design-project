const express = require('express')
const url = require('url')
const http = require('http')
const db = require('./database')

const app = express()

PORT = 8000

app.set('view engine', 'ejs')
app.use(express.json())

app.get('/user', function(req, res) {
  res.json({"users": ["userone", "usertwo", "userthree"]})
})

app.get('/login', function(req, res) {
  res.render('login');
})

app.get('/register', function(req, res) {
  res.render('register');
})

app.get('/test', function(req, res) {
  res.render('index');
})

app.listen(PORT, function(err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
  db.database_start();
})
