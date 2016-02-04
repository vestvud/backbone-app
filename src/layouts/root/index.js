'use strict';

var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Channels = require('../../channels');

var Header = require('../../components/header/index.js');

var IndexLayout = require('../index/index.js');
var ContactsLayout = require('../contacts_layout/index.js');

module.exports = Marionette.LayoutView.extend({
  el: '#app',
  template: false,
  regions: {
    header: "#header",
    content: "#content",
    footer: "#footer"
  },
  initialize: function(options) {
    this.header.show(new Header);
    this.onRoute();
  },
  onRoute: function(){
    var that = this;
    Channels.routeChannel.vent.on('setRoute', function(page){
      that.changePage(page)
    });
  },
  changePage: function(pageSlug){
    var Page = this.getPageBySlug(pageSlug);
    this.content.show(new Page);
  },
  getPageBySlug: function(slug){
    if (!slug) return;
    switch (slug) {
      case 'index':
        return IndexLayout;
        break;
      case 'contacts':
        return ContactsLayout;
        break;
      default:
        return IndexLayout;
        break;
    }
  }
});




