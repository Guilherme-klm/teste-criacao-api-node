const bodyParser = require("body-parser")

const port = 4000

const express = require('express')

const server = express()

server.use(bodyParser.urlencoded({extended : true}))

server.use(bodyParser.json())

server.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
   });

server.listen(process.env.PORT || port, function() {
    console.log("Salve")
})

module.exports = server