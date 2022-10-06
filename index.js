const express = require('express');
const PORT = process.env.PORT || 4000;
const { staff } = require('./data.json');

const app = express();

app.use(express.json()); //MIDDLEWARE

app.get('/hello', (req, res) => {
  res.send('world 🌎')
    .status(200);
});

app.get('/staff', (req, res) => {
  res.send(staff).status(200);
});

app.listen(PORT, () => {
  console.log(`app is listening @ http://localhost:${4000}`);
});