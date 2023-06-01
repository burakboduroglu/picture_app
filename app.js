const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo Name',
    description: 'Photo Description',
  };
  res.status(200).send(photo);
});

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
