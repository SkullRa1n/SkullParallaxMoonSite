const http = require('http')
const express = require("express");
const app = express();
const server = http.createServer(app);
var bodyParser = require('body-parser');

var path = require('path');
const favicon = require('serve-favicon')
const flash = require('express-flash')
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('css'));
app.use(express.static('views'));
app.use(express.static('imagens'));
app.use(favicon(path.join(__dirname, 'imagens', 'favicon.ico')))
app.use("/static", express.static('./static/'));
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(flash())

app.get("/static", (req, res) => {
  res.render('index')
  })

app.get("/", (req, res) => {
  req.flash('message', 'Skull Ra1n for your entertainment!')
  res.render('index', { message: req.flash(`message`) })
  let datah = new Date();
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  console.log(ip)
})

const listener = server.listen(8000, function() {
  console.log('App conseguiu ler a porta ' + listener.address().port)
})