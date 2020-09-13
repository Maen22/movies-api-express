const express = require('express');

const axios = require('axios');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {
  const query = req.query.search;

  axios
    .get(`http://omdbapi.com/?s=${query}&apikey=thewdb`)
    .then((response) => {
      const data = response.data;
      res.render('results', { data });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log('Movie App has started at PORT 3000');
});
