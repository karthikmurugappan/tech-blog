const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const hbs = exhbs.create();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const ses = {
    secret: 'secret',
    cookie: {
      maxAge: 10000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(ses));
  
  app.engine("handlebars",hbs.engine);
  app.set("view engine", "handlebars")
  
  hbs.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(routes);
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}/`));
  });