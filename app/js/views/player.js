var Backbone = require ('backbone')
var Handlebars = require ('handlebars')
var $ = require ('jquery')

module.exports = Backbone.View.extend({
  
  el: $(".music"),

  template: Handlebars.compile($("#player-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  render: function () {
    var song = this.model.toJSON();
    this.$el.html(this.template(song));
  }
});
