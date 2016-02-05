var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var $ = require('jquery');
var Router = require('./routes');
var RootView = require('./layouts/root');

require('./assets/stylesheets/common.styl');

var App = Marionette.Application.extend({
  initialize: function(options) {
  },
  onStart: function(){
    this.init();
  },
  init: function(){
    this.router = new Router();
    this.rootView = new RootView;

    if (Backbone.history) {
      Backbone.history.start({
        pushState: true
      });
    }
    this.currentRoute = Backbone.history.getFragment();
    this.router.navigate(this.currentRoute, {
      trigger: true,
      replace: false
    });
    this.onNavClick();
  },
  onNavClick: function(){
    var that = this;
    $('.app').on('click', 'a.j-nav', function(e){
      e.preventDefault();
      var href = $(this).attr('href');
      that.router.navigate(href, {
        trigger: true,
        replace: false
      })
    });
  }
});

var app = new App({container: '#app'});
app.start();
