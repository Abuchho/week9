const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', 
    {
        name: 'Andrew Buchholz',
        job: 'Developer'
    });
    
});



app.listen(3000);