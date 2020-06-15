'use strict';

const events = require('./events');
require('./vendor');
events.on('pickup', payload => logIt('pickup', payload));
events.on('transit', payload => transit('transit', payload));
events.on('delivered', payload => delivered('delivered', payload));


function logIt(event, payload) {
  let time = new Date();
  console.log({Event:{event, time, payload}});
}
function delivered(event, payload) {
  console.log(`DRIVER: delivered up ${payload.id}`);
  console.log(`VENDOR: Thank you for delivering ${payload.id}`);
  let time = new Date();
  console.log({Event:{event, time, payload}});
}
function transit(event, payload) {
  let time = new Date();
  console.log({Event:{event, time, payload}});
}
