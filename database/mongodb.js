var mongoose = require('mongoose');

module.exports.connect = function connect() {
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected to MongoDB");
    });
}