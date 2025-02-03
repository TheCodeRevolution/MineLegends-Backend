'use strict';

const Player = require('../models/Player.model');

exports.createPlayer = function (uuid, username, playTime, emeralds, language) {
  var newPlayer = new Player({
    uuid: uuid,
    username: username,
    playTime: playTime,
    emeralds: emeralds,
    language: language
  });

  return newPlayer.save();
}


exports.deletePlayer = function (uuid) {
  return Player.findOneAndDelete({uuid: uuid})
}


exports.getPlayer = function (uuid) {
  return Player.findOne({uuid: uuid})
}


exports.getPlayers = function () {
  return Player.find({});
}


exports.updatePlayer = function (uuid, username, playTime, emeralds, language) {
  var query = { uuid: uuid };
  const update = {
    username,
    playTime,
    emeralds,
    language,
  };

  return Player.findOneAndUpdate(query, update, { useFindAndModify: false });
}

