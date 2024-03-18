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
//send back to the browser the myForm page
app.get('/myForm', (req, res) => {res.render('pages/myForm')});

app.post('/myForm', (req, res) => {
    let formData = req.body;
    console.log(formData);
    let userName = formData.username;
    if (databaseOFUSernames.includes(userName)){
        res.render('pages/result', { result: MESSAGES.SUCCESS});
    }
    res.render("pages/result", {result: MESSAGES.FAILURE});
});

app.listen(3000);