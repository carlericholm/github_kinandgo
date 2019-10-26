
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

// const PORT = 80;

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');





const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


app.use(express.static(__dirname, { dotfiles: 'allow' } ));


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

// app.use((req, res, next) => {
//     res.redirect('/');
// })


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});






// app.listen(PORT, () => {
//     console.log("Server listenning on port 80");
// })