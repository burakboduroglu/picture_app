const express = require('express');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

//CONNECT DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  Photo.create(req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
