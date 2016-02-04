'use strict';

var $ = require('jquery');
var Marionette = require('backbone.marionette');
var SlideModel = require('./model/index_model');

module.exports = Marionette.ItemView.extend({
  className: 'index',
  template: require('./slider.jade'),
  initialize: function(options) {
    this.model = new SlideModel({
      test: 'yes'
    });
  }
});