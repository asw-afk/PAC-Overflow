// requiring packages
const express = require('express');
const sequelize = require("./config/connection")
const routes = require("./controllers")
// initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();

// parese json
app.use(express.json());
// getting params and queries from url
app.use(express.urlencoded({extended:true}));

// use this for routing
app.use(routes);

// Sync datbase with server
sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening at port ${PORT}`);
    })

})