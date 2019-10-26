const express = require('express');

const app = express();
const PORT = 80;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/kinegenerale', (req, res) => {
    res.render("kiGenerale");
})

app.get('/kinesportive', (req, res) => {
    res.render("kiSportive");
})

app.get('/suivi', (req, res) => {
    res.render("suivi");
})

app.get('/contact', (req, res) => {
    res.render("contact");
})

app.use((req, res, next) => {
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log("Server listenning on port 8080");
})