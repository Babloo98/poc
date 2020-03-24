const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const register = require('./routes/register');
const login = require('./routes/login');
const createcontact = require('./routes/createContact')


const PORT = 8000;
const app = express();


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next();
  });

mongoose.connect('mongodb://localhost:27017/poc', {useNewUrlParser: true});

app.use('/register',register);
app.use('/login', login);
app.use('/createcontact', createcontact)

// app.use(express.static(path.join(__dirname, "client", "build")))


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen((process.env.PORT || PORT),()=>{
    console.log("App is running on http://localhost:8000");
})