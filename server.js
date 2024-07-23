// requiring packages

const express = require('express');
const sequelize = require("./config/connection")
const routes = require("./controllers")
const model = require("./models/index.js")
const path = require('path');

//const session = require('express-session');
const {clog} = require('./utils/clogs.js');


const exphbs = require("express-handlebars");


//const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creating the SequlizeStore 

// const sess = {
//   secret: 'You guys rock!',
//   store: new SeqelizeStore({
//     db: sequelize,
//   }),

// }

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


// use this for routing
app.use(routes);



// Sync datbase with server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
  });
});

// Code for upvote/downvote/voteCount system. Not entirely sure if it all gets implimented here in server.js, so i commented everything out so it wouldnt break anything

// var inc = 0;
// var dec = 0;
// var voteCount = inc.valueOf + dec.valueOf

// app.get('/votes', async (req, res) => {
//   res.json({voteCount});
// });

// app.post("/upvote", async (req, res) => {
//   res.setHeader("Upvote");
//   inc += parseFloat(req.body.changeBy);
//   res.write(JSON.stringify(inc));
//   res.end()
// });

// app.post("/downvote", async (req, res) => {
//   res.setHeader("Downvote");
//   dec -= parseFloat(req.body.changeBy);
//   res.write(JSON.stringify(dec));
//   res.end()
// });

