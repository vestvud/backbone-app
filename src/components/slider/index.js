'use strict';

var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Model = require('./model/index_model');

module.exports = Marionette.ItemView.extend({
  className: 'index',
  template: require('./index.jade'),
  initialize: function(options) {
    this.model = new Model({
      test: 'yes'
    });
  }
});