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
        main: 'partials/main/landing',
        footer: 'partials/footer',
    }
});
}); 

server.get('/gallery', (req, res) => {
    res.render('index', {locals: {
        title: "Welcome!",
        activeNew: "/",
        navs,
    }, 
    partials: {
        header: 'partials/header',
        main: 'partials/main/gallery',
        footer: 'partials/footer',
    }
});
});

server.get('/about', (req, res) => {
    res.render('index', {locals: {
        title: "Welcome!",
        activeNew: "/",
        navs,
    }, 
    partials: {
        header: 'partials/header',
        main: 'partials/main/about',
        footer: 'partials/footer',
    }
});
});


server.get('/contact-us', (req, res) => {
    res.render('index', {locals: {
        title: "Welcome!",
        activeNew: "/",
        navs,
    }, 
    partials: {
        header: 'partials/header',
        main: 'partials/main/contactus',
        footer: 'partials/footer',
    }
});
});

server.listen(8080, () =>
  console.log('The server is running at PORT 8080')
)