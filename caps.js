'use strict';

const events = require('./events');
require('./vendor');
require('./driver');
events.on('pickup', payload => pickup('pickup', payload));
events.on('transit', payload => transit('transit', payload));
events.on('delivered', payload => delivered('delivered', payload));


function pickup(event, payload) {
  let time = new Date();
  console.log('Event',{event, time, payload});
}
function transit(event, payload) {
  let time = new Date();
  console.log('Event',{event, time, payload});
}
function delivered(event, payload) {
  // console.log(`VENDOR: Thank you for delivering ${payload.id}`);
  let time = new Date();
  console.log('Event',{event, time, payload});
}

