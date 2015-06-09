var Backbone = require("backbone");
var db = require("../db");

var LOAD = "SELECT screename, date, text, stars FROM reviews WHERE rowid = $id";
var SAVE_NEW ="INSERT INTO projects (name, client, address) VALUES ($name, $client, $address);";
