'use strict';
require('dotenv').config();
const net = require('net');
const client = new net.Socket();
// connect to server.js using port + host(ip-address) the same as what the main server had(caps.js)
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
client.connect(PORT, HOST, ()=> {console.log('logger got connected');});
const faker = require('faker');

// Send the fake order data to server using client.write every 5 min==>
setInterval(
  function () {
    let obj={storeName:process.env.storeName,
      customerName:faker.name.findName(),
      address:faker.address.streetAddress(),
    };
    let event = JSON.stringify(obj);
    client.write(event);
  },5000);

// Here we want to retrive 'data' from server using data event==>
const messages = [];
client.on('data', function(data){ 
  let eventObj = JSON.parse(data);
  if (eventObj.event == 'delivered') {
    console.clear();
    messages.push(eventObj.id);
    messages.forEach(msg=> console.log(`Thank you for delivering ${msg}`));
  }
});