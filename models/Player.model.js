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
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
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

// Pre-save middleware zum Aktualisieren von updated_at
playerSchema.pre('save', function(next) {
    this.updated_at = new Date();
    next();
});

// Pre-update middleware
playerSchema.pre('findOneAndUpdate', function(next) {
    this.set({ updated_at: new Date() });
    next();
});


// Methode zum Formatieren der Daten für die API
playerSchema.methods.toAPI = function() {
    return {
        uuid: this.uuid,
        username: this.username,
        language: this.language,
        playTime: this.playTime,
        emeralds: this.emeralds,
        created_at: this.created_at.toISOString(),
        updated_at: this.updated_at.toISOString()
    };
};

// Statische Methode zum Finden eines Spielers
playerSchema.statics.findByUUID = function(uuid) {
    return this.findOne({ uuid: uuid });
};

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;