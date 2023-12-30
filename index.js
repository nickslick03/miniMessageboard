const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static('./static'));

app.get('/', (req, res) => {
    res.render('index', { name: 'nick' });
});

app.listen(3000);