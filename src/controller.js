var Marionette = require('backbone.marionette');
var Channels = require('./channels');

var Controller = Marionette.Controller.extend({
  home: function() {
    Channels.routeChannel.vent.trigger('setRoute', 'index');
  },
  contacts: function() {
    Channels.routeChannel.vent.trigger('setRoute', 'contacts');
  },
  notFound: function() {
    console.log('not found');
  }
});

module.exports = Controller;