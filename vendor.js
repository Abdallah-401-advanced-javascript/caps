'use strict';

// everything will fall in here
require('dotenv').config();
const events = require('./events');
const faker = require('faker');
require('./caps');
setInterval(function(){require('./driver');},1000);

// user fake order every 5 min==>
setInterval(function(){events.emit('pickup', {
  storeName:process.env.storeName,
  customerName:faker.name.findName(),
  address:faker.address.streetAddress(),
  id:faker.random.number(),
});},5000);

