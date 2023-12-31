const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static('./static'));
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      body: "Hi there!",
      user: "Amando",
      date: new Date()
    },
    {
      body: "Hello World!",
      user: "Charles",
      date: new Date()
    },
    {
        body: "I'm cool",
        user: "nickk",
        date: new Date()
    },
    {
      body: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.",
      user: "G.W.",
      date: new Date()
    }
 ];

app.get('/', (req, res) => {
  res.render('index', { messages });
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/new', (req, res) => {
  messages.unshift({ 
    user: req.body.user, 
    body: req.body.body, 
    date: new Date()
  });
  res.redirect('/');
});

app.listen(3000);