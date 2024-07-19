// requiring packages
const path = require('path');
const express = require("express");
//const session = require('express-session');
const {clog} = require('./utils/clogs.js')
const sequelize = require("./config/connection.js");
//const routes= require('./controllers')
const exphbs = require("express-handlebars");

//const SequelizeStore = require('connect-session-sequelize')(session.Store);

// initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();
const hbs = exphbs.create({});

app.use(clog);

//app.use(session);

app.engine('handlebars', hbs.engine);
app.set('view engine', "handlebars");

// parese json
app.use(express.json());

// getting params and queries from url
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

// Sync datbase with server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
  });
});
