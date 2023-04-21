const express = require("express");
es6Renderer = require('express-es6-template-engine');
const navs = require('./nav.json');

const server = express();

server.use(express.json());
server.use("/", express.static(__dirname + "/public"));

server.engine('html', es6Renderer);
server.set('views', 'views')
server.set('view engine', 'html')

server.get('/', (req, res) => {
    res.render('index', {locals: {
        title: "Welcome!",
        activeNew: "/",
        navs,
    }, 
    partials: {
        header: 'partials/header',
        main: 'partials/main',
        footer: 'partials/footer',
    }
});
});

server.get('/heartbeat', (req, res) => {
    console.log('heartbeat', req.heartbeat);
    res.json({message: 'You are at the /heartbeat'})
} ) 

server.listen(8080, () =>
  console.log('The server is running at PORT 8080')
)