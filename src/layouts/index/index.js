'use strict';

var $ = require('jquery');
var Marionette = require('backbone.marionette');

var Slider = require('../../components/slider/index.js');

module.exports = Marionette.LayoutView.extend({
  className: 'index',
  template: require('./index.jade'),
  regions: {
    'slider': '#slider'
  },
  initialize: function(options) {
  },
  onRender: function() {
    this.showRegions();
  },
  showRegions: function() {
    this.slider.show(new Slider);
  }
});




