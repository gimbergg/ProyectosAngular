var pubsub = require('../../server/pubsub.js');
module.exports = function(Sifefechahora) {
    // remote method
    Sifefechahora.revEngine = function(sound, cb) {
      cb(null, sound + ' ' + sound + ' ' + sound);
    };
    Sifefechahora.remoteMethod(
      'revEngine',
      {
        accepts: [{arg: 'sound', type: 'string'}],
        returns: {arg: 'engineSound', type: 'string'},
        http: {path:'/rev-engine', verb: 'post'}
      }
    );
  
    // remote method before hooks
    Sifefechahora.beforeRemote('revEngine', function(context, unused, next) {
      //console.log('Putting in the Sifefechahora key, starting the engine.');
      next();
    });
  
    // afterInitialize is a model hook which is still used in loopback
    Sifefechahora.afterInitialize = function() {
      // http://docs.strongloop.com/display/public/LB/Model+hooks#Modelhooks-afterInitialize
      //console.log('> afterInitialize triggered');
    };
  
    // the rest are all operation hooks
    // - http://docs.strongloop.com/display/public/LB/Operation+hooks
    Sifefechahora.observe('before save', function(ctx, next) {
      //console.log('> before save triggered:', ctx.Model.modelName, ctx.instance || ctx.data);
      next();
    });
    Sifefechahora.observe('after save', function(ctx, next) {
      //socket.emit('/Sifefechahora/POST',ctx.instance);
      pubsub.publish('/Sifefechahora/POST', ctx.instance);
        //console.log('> after save triggered:', ctx.Model.modelName, ctx.instance);
        next();
    });
    Sifefechahora.observe('before delete', function(ctx, next) {
      //console.log('> before delete triggered:', ctx.Model.modelName, ctx.instance);
      next();
    });
    Sifefechahora.observe('after delete', function(ctx, next) {
      pubsub.publish('/Sifefechahora/DELETE', (ctx.instance || ctx.where));
      //console.log('> after delete triggered:', ctx.Model.modelName, (ctx.instance || ctx.where));
      next();
    });
  
    // remote method after hook
    Sifefechahora.afterRemote('revEngine', function(context, remoteMethodOutput, next) {
      //console.log('Turning off the engine, removing the key.');
      next();
    });
  
    // model operation hook
    Sifefechahora.observe('before save', function(ctx, next) {
      if (ctx.instance) {
        //console.log('About to save a Sifefechahora instance:', ctx.instance);
      } else {
        //console.log('About to update Sifefechahoras that match the query %j:', ctx.where);
      }
      next();
    });
  };