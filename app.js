const express = require('express');
const server = express();
//http://localhost:3000/
const port = 3000;

const callMe = (req, res) => {
    //res.sendFile(__dirname + '/index.html');
    res.send(`<h1>Hello World!</h1>
    <a href="/about">About</a>
    <a href="/hello>hello</a>
    `);
}

let myHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello about page!</h1>
    <a href="/">Home</a>
    <a href="/hello>hello</a>
</body>
</html>
`;

let names = ['John', 'Paul', 'George', 'Ringo'];
names.forEach(name => myHtml += `<h1>${name}</h1>`)

//using ecmasript 6 in javascript to send a response to the server
    //when going to /, send a response of 'Hello World!'
        //req gives info like browser type, ip address, etc
server.get('/', callMe);
server.get('/about', (req, res) => res.send(myHtml));


//query string http://localhost:3000/hello?firstName=John&lastName=Yin
    //order doesnt matter
server.get('/hello', (req, res) => {
    console.log(req.query);
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    if (firstName === undefined || lastName === undefined) {
        res.send(`<p>Hello! Please add a first and last name <\p>`);
    } else {
    res.send(`Hello ${firstName} ${lastName}`);
    }
});
//parameter http://localhost:3000/hellow/john/doe
    //must have all parameters or it will not work
    //order matters
server.get('/hellow/:firstName/:lastName', (req, res) => {
    console.log(req.params);
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;
    res.send(`Hello ${firstName} ${lastName}`);
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`))

