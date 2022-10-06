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
  console.log(req.query); //query strings
  res.send(staff).status(200);
});

app.get('/staff/:name/department/:department', (req,res) => {
  console.log(req.params); //route params
  res.sendStatus(204).end();
});


app.listen(PORT, () => {
  console.log(`app is listening @ http://localhost:${4000}`);
});