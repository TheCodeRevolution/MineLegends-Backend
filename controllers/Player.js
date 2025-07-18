'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.createPlayer = function createPlayer (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var username = req.swagger.params['username'].value;
  var playTime = req.swagger.params['playTime'].value;
  var emeralds = req.swagger.params['emeralds'].value;
  var serverName = req.swagger.params['serverName'].value;
  var online = req.swagger.params['online'].value;
  var language = req.swagger.params['language'].value;
  Player.createPlayer(uuid,username,playTime,emeralds,serverName,online,language)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
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
  var serverName = req.swagger.params['serverName'].value;
  var online = req.swagger.params['online'].value;
  var language = req.swagger.params['language'].value;
  Player.updatePlayer(uuid,username,playTime,emeralds,serverName,online,language)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
