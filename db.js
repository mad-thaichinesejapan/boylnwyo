const sqlite3 = require('sqlite3')
let db = new splite3.Database('./db.js', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

module.exports = AppDB