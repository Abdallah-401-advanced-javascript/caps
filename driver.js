'use strict';

const events = require('./events');
require('./caps');
events.on('pickup', payload => handleplaplapla(payload));

function handleplaplapla(payload) {
  console.log(`DRIVER: picked up ${payload.id}`);
  events.emit('transit', payload);
  setTimeout(function(){ events.emit('delivered', payload); }, 3000);
}