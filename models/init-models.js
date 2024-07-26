var DataTypes = require("sequelize").DataTypes;
var _accounts = require("./accounts");
var _achievements = require("./achievements");
var _adminjails = require("./adminjails");
var _atm = require("./atm");
var _bans = require("./bans");
var _billiard = require("./billiard");
var _characternamechanges = require("./characternamechanges");
var _characters = require("./characters");
var _datafeeds = require("./datafeeds");
var _dogs = require("./dogs");
var _failed_jobs = require("./failed_jobs");
var _gates = require("./gates");
var _groupmembers = require("./groupmembers");
var _groupranks = require("./groupranks");
var _groups = require("./groups");
var _interiors = require("./interiors");
var _items = require("./items");
var _jobnpc = require("./jobnpc");
var _kicks = require("./kicks");
var _logs = require("./logs");
var _migrations = require("./migrations");
var _news = require("./news");
var _npcs = require("./npcs");
var _password_reset_tokens = require("./password_reset_tokens");
var _personal_access_tokens = require("./personal_access_tokens");
var _reports = require("./reports");
var _serialchange = require("./serialchange");
var _sessions = require("./sessions");
var _shop_peds = require("./shop_peds");
var _taxes = require("./taxes");
var _trashes = require("./trashes");
var _users = require("./users");
var _vehicles = require("./vehicles");
var _wanted = require("./wanted");
var _weapons = require("./weapons");

function initModels(sequelize) {
  var accounts = _accounts(sequelize, DataTypes);
  var achievements = _achievements(sequelize, DataTypes);
  var adminjails = _adminjails(sequelize, DataTypes);
  var atm = _atm(sequelize, DataTypes);
  var bans = _bans(sequelize, DataTypes);
  var billiard = _billiard(sequelize, DataTypes);
  var characternamechanges = _characternamechanges(sequelize, DataTypes);
  var characters = _characters(sequelize, DataTypes);
  var datafeeds = _datafeeds(sequelize, DataTypes);
  var dogs = _dogs(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var gates = _gates(sequelize, DataTypes);
  var groupmembers = _groupmembers(sequelize, DataTypes);
  var groupranks = _groupranks(sequelize, DataTypes);
  var groups = _groups(sequelize, DataTypes);
  var interiors = _interiors(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var jobnpc = _jobnpc(sequelize, DataTypes);
  var kicks = _kicks(sequelize, DataTypes);
  var logs = _logs(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var news = _news(sequelize, DataTypes);
  var npcs = _npcs(sequelize, DataTypes);
  var password_reset_tokens = _password_reset_tokens(sequelize, DataTypes);
  var personal_access_tokens = _personal_access_tokens(sequelize, DataTypes);
  var reports = _reports(sequelize, DataTypes);
  var serialchange = _serialchange(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var shop_peds = _shop_peds(sequelize, DataTypes);
  var taxes = _taxes(sequelize, DataTypes);
  var trashes = _trashes(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vehicles = _vehicles(sequelize, DataTypes);
  var wanted = _wanted(sequelize, DataTypes);
  var weapons = _weapons(sequelize, DataTypes);


  return {
    accounts,
    achievements,
    adminjails,
    atm,
    bans,
    billiard,
    characternamechanges,
    characters,
    datafeeds,
    dogs,
    failed_jobs,
    gates,
    groupmembers,
    groupranks,
    groups,
    interiors,
    items,
    jobnpc,
    kicks,
    logs,
    migrations,
    news,
    npcs,
    password_reset_tokens,
    personal_access_tokens,
    reports,
    serialchange,
    sessions,
    shop_peds,
    taxes,
    trashes,
    users,
    vehicles,
    wanted,
    weapons,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
