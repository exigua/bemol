var express = require('express');
var router = express.Router();
var dbConnection = require('../dbConnection');

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
const dbName = 'bemol'


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// const findUser = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('contacts')
//         // Find some documents
//     collection.find({}).toArray(function(err, contacts) {
//         // assert.equal(err, null);
//         console.log("Found the following records")
//         console.log(contacts)
//         callback(contacts)
//     })
// }

module.exports = router;