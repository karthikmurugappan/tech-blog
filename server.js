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
