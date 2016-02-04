'use strict';

var $ = require('jquery');
var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
  className: 'contacts',
  template: require('./index.jade'),
  initialize: function(options) {
    this.render()
  }
});




