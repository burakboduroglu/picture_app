const express = require('express');
const ejs = require('ejs');
const DB_CONNECTION = require('./controllers/connectionController');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');

const app = express();
const PORT = process.env.PORT || 4000;

//CONNECT DB
DB_CONNECTION.connect;

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.post('/photos', photoController.createPhoto);
app.delete('/photos/:id', photoController.deletePhoto);
app.get('/about', pageController.getAbout);
app.get('/add', pageController.getAdd);
app.get('/photos/edit/:id', pageController.getById);

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
