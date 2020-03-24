const express = require('express');
const route = express.Router();
const Register = require('../models/registerSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = require('../assets/key')

route.get('/', (req, res) => {
    const userEmail = req.body.email;
        let authenticated = false;
        Register.findOne({
            'email': userEmail
        }, function (err, obj) {
            const authentication = bcrypt.compareSync(req.body.password, obj.password);
            const authenticatedSuccessMessage = jwt.sign({ isAuthenticated : authentication, user: { name: obj.name,email: obj.email }}, secretKey);
            {
                authentication ? res.status(200).send({isAuthenticated : authentication, token : authenticatedSuccessMessage, user: {name: obj.name,email: obj.email, number :obj.number }, time: new Date})
                                : res.status(401).send({isAuthenticated : authentication, errorMessage:"Please enter valid Detials"})
            }
        });
});


module.exports = route;