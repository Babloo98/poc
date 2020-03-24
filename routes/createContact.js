const express = require('express');
const route = express.Router();
const Contact = require('../models/contactschema');

route.post('/', (req,res)=>{
    const data = new Contact(
        {   
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            signedInUser: req.body.signedInUser,
            date: new Date,
        }
    );
    data.save()
    .then((ress)=>{
        res.status(200).send(ress);
    })
    .catch(err=>{console.log('error',err)})
});

route.get('/',(req,resp)=>{
    Contact.find({signedInUser: req.body.signedInUser})
    .then((res)=>{
        resp.status(200).send(res);
    })
    .catch(err=>{console.log('error',err)})
});

route.delete('/', (req,resp) => {
    Contact.findOneAndDelete( {$and : [{signedInUser: req.body.signedInUser},{id: req.body._id}]})
    .then((res)=>{
        resp.status(200).send(res);
    })
    .catch(resp.status(404).send({ errorMessage: "Record not found" }))
})

module.exports= route;