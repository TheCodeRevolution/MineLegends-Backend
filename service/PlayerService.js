'use strict';


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
 * returns BackendPlayer
 **/
exports.createPlayer = function(uuid,username,playTime,emeralds,created_at,updated_at) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
 * returns BackendPlayer
 **/
exports.updatePlayer = function(uuid,username,playTime,emeralds,created_at,updated_at) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

