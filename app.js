const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('ejs');
const app = express();
const PORT = 7000;

app.use(express.json());
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/definition', (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
        res.send(error);  
    };
});

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}/definition`);
});