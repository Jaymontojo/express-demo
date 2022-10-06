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

app.get('/staff/:firstName', (req,res) => {
  console.log(req.params); //route params
  const { firstName } = req.params;
  const result = staff.filter((staffMember) => {
    return staffMember.first_name === firstName
  })
  res.send(result[0]).status(204);
});

app.listen(PORT, () => {
  console.log(`app is listening @ http://localhost:${4000}`);
});