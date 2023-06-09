const mongoose = require('mongoose');
exports.connect = mongoose
  .connect(
    'mongodb+srv://burakboduroglu0:pwd@cluster0.3xturtn.mongodb.net/pcat-db?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });
