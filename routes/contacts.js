var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection')
const ObjectId = require('mongodb').ObjectId
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
const dbName = 'bemol'

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('addContact');
});
// La route pour créer un nouveau contact :

router.post('/', function(req, res, next) {
    dbConnection(function(db) {
        db.collection('contacts')
            .insertOne({
                firstname: req.body.firstname,
                surname: req.body.surname,
                mobile: req.body.mobile,
                email: req.body.email,
                date: new Date(),
                notes: [],
            })

    })

})
module.exports = router;