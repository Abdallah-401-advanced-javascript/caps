'use strict';

const events = require('./events');
require('./caps');
events.on('pickup', payload => handleplaplapla(payload));

function handleplaplapla(payload) {
  setTimeout(function(){console.log(`DRIVER: picked up ${payload.id}`);
    events.emit('transit', payload);},1000);
  setTimeout(function(){console.log(`DRIVER: picked up ${payload.id}`);
    events.emit('delivered', payload); }, 3000);
}
