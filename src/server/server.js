const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/build', (req, res) => res.status(418).json({ whatever: 1 }))

// express.static(path.join(__dirname, '../build')))

app.get('/result', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/about', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


// OLD PACKAGE.JSON SCRIPTS
// "scripts": {
//   "webpack": "webpack",
//   "start": "webpack serve",
//   "test": "echo \"Error: no test specified\" && exit 1"
// },