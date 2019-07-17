//Variables
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));
app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is." });
});

app.listen(port, () => console.log(`Application is running on localhost:${port}!`));