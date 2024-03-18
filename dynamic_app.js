const express = require('express');
let app = express();

app.use(express.static('public'));

//set view engine to EJS
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    let date = new Date();
    //sending date varirable into index for the ejs page
    res.render('pages/index', {
        dateVariable: date
    })
});

app.get('/about', (req, res) => {
    //send back pages/about
    res.render('pages/about')
});

app.listen(3000);