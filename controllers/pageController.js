const Photo = require('../models/Photo');

exports.getAbout = async (req, res) => {
  res.render('about');
};

exports.getAdd = async (req, res) => {
  res.render('add');
};

exports.getById = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('edit', {
    photo,
  });
};
