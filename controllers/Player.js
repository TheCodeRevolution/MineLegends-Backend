'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.createPlayer = function createPlayer (req, res, next) {
  // Log die eingehenden Parameter
  console.log("Controller received params:");
  console.log("uuid:", req.swagger.params['uuid'].value);
  console.log("username:", req.swagger.params['username'].value);
  console.log("playTime:", req.swagger.params['playTime'].value);
  console.log("emeralds:", req.swagger.params['emeralds'].value);
  console.log("language:", req.swagger.params['language'] ? req.swagger.params['language'].value : 'de');

  Player.createPlayer(
    req.swagger.params['uuid'].value,
    req.swagger.params['username'].value,
    req.swagger.params['playTime'].value,
    req.swagger.params['emeralds'].value,
    req.swagger.params['language'] ? req.swagger.params['language'].value : 'de'
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.deletePlayer = function deletePlayer (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  Player.deletePlayer(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPlayer = function getPlayer (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  Player.getPlayer(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPlayers = function getPlayers (req, res, next) {
  Player.getPlayers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePlayer = function updatePlayer (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var username = req.swagger.params['username'].value;
  var playTime = req.swagger.params['playTime'].value;
  var emeralds = req.swagger.params['emeralds'].value;
  var language = req.swagger.params['language'].value;
  var created_at = req.swagger.params['created_at'].value;
  var updated_at = req.swagger.params['updated_at'].value;
  Player.updatePlayer(uuid,username,playTime,emeralds,language,created_at,updated_at)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
