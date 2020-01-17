const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'bemol';

//Connection à la DB
const dbConnection = function(callback) {
    MongoClient.connect(url, function(err, client) {
        if (err) {
            return
        }
        console.log("Connecté au serveur");

        const db = client.db(dbName);

        callback(db);

        client.close();
    });
}

module.exports = dbConnection;