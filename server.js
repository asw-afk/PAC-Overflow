// requiring packages
const express = require('express');
const sequelize = require("./config/connection.js");

// initializing the port and app
const PORT = process.env.PORT || 3001;
const app = express();

// parese json
app.use(express.json());

// getting params and queries from url
app.use(express.urlencoded({extended:true}));


// Sync datbase with server
sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening at port ${PORT}`);
    })
})