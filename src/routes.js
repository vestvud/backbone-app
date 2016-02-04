var Marionette = require('backbone.marionette');
var Controller = require('./controller');

var Router = Marionette.AppRouter.extend({
  controller: new Controller,
  appRoutes : {
    "(/)": "home",
    "contacts" : "contacts",

    '*notFound': 'notFound'
  }
});
module.exports = Router;