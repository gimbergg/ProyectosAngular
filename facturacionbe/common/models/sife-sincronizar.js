'use strict';
var pubsub = require('../../server/pubsub.js');
module.exports = function(Sifesincronizar) {
    // remote method
    Sifesincronizar.revEngine = function(sound, cb) {
      cb(null, sound + ' ' + sound + ' ' + sound);
    };
    Sifesincronizar.remoteMethod(
      'revEngine',
      {
        accepts: [{arg: 'sound', type: 'string'}],
        returns: {arg: 'engineSound', type: 'string'},
        http: {path:'/rev-engine', verb: 'post'}
      }
    );

    // remote method before hooks
    Sifesincronizar.beforeRemote('revEngine', function(context, unused, next) {
      //console.log('Putting in the Sifesincronizar key, starting the engine.');
      next();
    });

    // afterInitialize is a model hook which is still used in loopback
    Sifesincronizar.afterInitialize = function() {
      // http://docs.strongloop.com/display/public/LB/Model+hooks#Modelhooks-afterInitialize
      //console.log('> afterInitialize triggered');
    };

    // the rest are all operation hooks
    // - http://docs.strongloop.com/display/public/LB/Operation+hooks
    Sifesincronizar.observe('before save', function(ctx, next) {
      //console.log('> before save triggered:', ctx.Model.modelName, ctx.instance || ctx.data);
      next();
    });
    Sifesincronizar.observe('after save', function(ctx, next) {
      //socket.emit('/Sifesincronizar/POST',ctx.instance);
      pubsub.publish('/Sifesincronizar/POST', ctx.instance);
        //console.log('> after save triggered:', ctx.Model.modelName, ctx.instance);
        next();
    });
    Sifesincronizar.observe('before delete', function(ctx, next) {
      //console.log('> before delete triggered:', ctx.Model.modelName, ctx.instance);
      next();
    });
    Sifesincronizar.observe('after delete', function(ctx, next) {
      pubsub.publish('/Sifesincronizar/DELETE', (ctx.instance || ctx.where));
      //console.log('> after delete triggered:', ctx.Model.modelName, (ctx.instance || ctx.where));
      next();
    });

    // remote method after hook
    Sifesincronizar.afterRemote('revEngine', function(context, remoteMethodOutput, next) {
      //console.log('Turning off the engine, removing the key.');
      next();
    });

    // model operation hook
    Sifesincronizar.observe('before save', function(ctx, next) {
      if (ctx.instance) {
        //console.log('About to save a Sifesincronizar instance:', ctx.instance);
      } else {
        //console.log('About to update Sifesincronizars that match the query %j:', ctx.where);
      }
      next();
    });
  };
