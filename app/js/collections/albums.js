var Backbone = require('backbone');
var Album = require('../models/album.js');

module.exports = Backbone.Collection.extend({
  model: Album
});
