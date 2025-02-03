'use strict';

const Player = require('../models/Player.model');

/**
 * Create a new Player
 * Creates a new player with the provided data.
 *
 * uuid String UUID of the Player
 * username String Username of the Player
 * playTime Long Play time of the Player (in long integer format)
 * emeralds Integer Number of emeralds the Player has
 * created_at Date Creation timestamp (ISO 8601 format)
 * updated_at Date Last update timestamp (ISO 8601 format)
 * language String Language of the Player (e.g., 'de', 'en') (optional)
 * returns BackendPlayer
 **/
exports.createPlayer = function(uuid, username, playTime, emeralds, language) {
  return new Promise(async (resolve, reject) => {
    try {
      
      console.log(uuid);

      resolve("funktioniert");
    } catch (error) {
      console.error('Create Player Error:', error);  // Logging für Debugging
      reject(error);
    }
  });
}


/**
 * Delete Player
 * Delete a player by its UUID.
 *
 * uuid String UUID of the Player
 * returns BackendPlayer
 **/
exports.deletePlayer = function(uuid) {
  return new Promise(async (resolve, reject) => {
    try {
      const player = await Player.findOneAndDelete({ uuid: uuid });
      if (!player) {
        reject({ code: 404, message: 'Player not found' });
        return;
      }
      resolve(player.toAPI());
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Get Player Data
 * Retrieve a player's data by its UUID.
 *
 * uuid String UUID of the Player
 * returns BackendPlayer
 **/
exports.getPlayer = function(uuid) {
  return new Promise(async (resolve, reject) => {
    try {
      const player = await Player.findOne({ uuid: uuid });
      resolve(player ? player.toAPI() : null);
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Get All Players
 * Retrieve a list of all players.
 *
 * returns List
 **/
exports.getPlayers = function() {
  return new Promise(async (resolve, reject) => {
    try {
      const players = await Player.find({});
      resolve(players.map(player => player.toAPI()));
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Update Player
 * Update an existing player's information.
 *
 * uuid String UUID of the Player
 * username String Username of the Player
 * playTime Long Play time of the Player (in long integer format)
 * emeralds Integer Number of emeralds the Player has
 * created_at Date Creation timestamp (ISO 8601 format)
 * updated_at Date Last update timestamp (ISO 8601 format)
 * language String Language of the Player (e.g., 'de', 'en') (optional)
 * returns BackendPlayer
 **/
exports.updatePlayer = function(uuid, username, playTime, emeralds, created_at, updated_at, language) {
  return new Promise(async (resolve, reject) => {
    try {
      const updateData = {
        username,
        playTime,
        emeralds,
        language,
        created_at: new Date(created_at),
        updated_at: new Date(updated_at)
      };

      const player = await Player.findOneAndUpdate(
        { uuid: uuid },
        updateData,
        { 
          new: true,          // Returns the updated document
          runValidators: true // Ensures validators run on update
        }
      );

      if (!player) {
        reject({ code: 404, message: 'Player not found' });
        return;
      }

      resolve(player.toAPI());
    } catch (error) {
      reject(error);
    }
  });
}

