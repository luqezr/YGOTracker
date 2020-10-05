const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const body_parser = require('body-parser');
const accesoDatosLinks = require("./addToCollection");

// Card Fetch
const cardFetcher = require("./cardFetcher")

// Initializations
const app = express();
require('./database');
require('./config/passport');

// settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middlewares
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// routes
app.use(require('./routes'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));
app.use(require('./routes/decks'));
app.use(require('./routes/collections'));
app.use(require('./routes/wishlists'));



// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static('./public/'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

app.route("/addcard")
    .get((req, res) => {
        res.render("addcard");
    })
    .post((req, res) => {
        accesoDatosLinks.Insertar(req.body.url, (err, datos) => {
            if (err) {
                res.render("error");
            } else {
                res.render("addcard", {
                    linkcreado: true
                });
            }
        })
    })

app.get("/mycollection", (req, res) => {
    accesoDatosLinks.ObtenerTodos((err, datos) => {
        if (err) {
            res.render("error");
        } else {
            res.render("mycollection", {
                links: datos
            });
        }
    })
});

app.get("/redirect", (req, res) => {
    let id = req.query.id;

    accesoDatosLinks.Obtener(id, (err, datos) => {
        if (err) {
            res.render("error");
        } else {
            datos.contador++;
            accesoDatosLinks.Actualizar(id, datos.contador, (err2, datos2) => {
                if (err) {
                    res.render("error");
                } else {
                    res.redirect(datos.url);
                }
            })
        }
    })
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
    return;
});
/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


Note that this has ad

  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });


*/


