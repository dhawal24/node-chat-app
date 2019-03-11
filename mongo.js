const mongodb = require('mongodb');
const client = mongodb.MongoClient;
var _db;
let connect = () => {
    client.connect('mongodb://localhost:27017', (error, mongo) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log('Mongo Connected!');
        _db = mongo.db('travelex_db');
    });
};

let saveData = data => {
    _db.collection('chatData').insert(data, (error, result) => {
        if (error) {
            console.log("Can't Insert..");
        }
        console.log('Data inserted..');
    });
};

module.exports = { connect, saveData };
