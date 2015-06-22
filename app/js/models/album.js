// EN GLOBAL
// Sfotipy.Models.Album = Backbone.Model.extend({});

// Obtenemos la dependencia usando Browserify
// que la saca desde npm 
var Backbone = require('backbone');

// Exportandop Backbone con la funcionalidad commonjs
module.exports = Backbone.Model.extend({});