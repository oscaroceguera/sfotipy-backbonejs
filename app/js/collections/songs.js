var Backbone = require('backbone');
var Song = require('../models/song.js');

module.exports = Backbone.Collection.extend({
  model : Song
});
