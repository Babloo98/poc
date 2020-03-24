const express = require('express');
const route = express.Router();
const Register = require('../models/registerSchema');
const bcrypt = require('bcrypt');

route.post('/', (req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    var encryptedpassword = bcrypt.hashSync(req.body.password, salt);
    const data = new Register(
        {   
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            password: encryptedpassword,
            date: new Date,
        }
    );
    data.save()
    .then((ress)=>{
        res.status(200).send(ress);
    })
    .catch(err=>{console.log('erroe',err)})
});

route.get('/',(req,resp)=>{
    Register.find()
    .then((res)=>{
        resp.status(200).send(res);
    });
});

module.exports= route;