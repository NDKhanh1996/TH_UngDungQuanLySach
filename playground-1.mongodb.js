
const database = 'TH_Book';
const collection = 'Book';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.createUser({
    user: "codegym",
    pwd: "123456",
    roles: ["readWrite"]
});