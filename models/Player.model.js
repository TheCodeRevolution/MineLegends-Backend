const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        index: true
    },
    language: {
        type: String,
        required: false,
        default: 'en',
        index: true
    },
    playTime: {
        type: Number,  // für long integer
        required: true,
        index: true
    },
    emeralds: {
        type: Number,
        required: true,
        index: true
    },
    serverName: {      // Neues Feld
        type: String,
        required: true,
        index: true
    },
    online: {         // Neues Feld
        type: Boolean,
        required: true,
        default: false,
        index: true
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: false,
        default: Date.now
    }
});

// Validierungen
playerSchema.path('uuid').validate(function(uuid) {
    return uuid.length;
}, 'UUID cannot be blank');

playerSchema.path('username').validate(function(username) {
    return username.length;
}, 'Username cannot be blank');

playerSchema.path('serverName').validate(function(serverName) {
    return serverName.length;
}, 'Server name cannot be blank');

// Unique UUID Validierung
playerSchema.path('uuid').validate(function(value) {
    return this.constructor.findOne({ uuid: value }).exec().then((player) => {
        if (player) {
            if (this.id === player.id) {
                return true;
            }
            return false;
        }
        return true;
    });
}, 'UUID must be unique');


const Player = mongoose.model('Player', playerSchema);

module.exports = Player;