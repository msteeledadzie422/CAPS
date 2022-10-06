'use strict';

const { io } = require('socket.io-client');
const Chance = require('chance');

const vendorAlert = require('./vendorHandler');
const vendorConfirmation = require('./delivered');

const socket = io('http://localhost:3002/caps');

const chance = new Chance();

socket.on('PICKUP', vendorAlert);
socket.on('DELIVERED', vendorConfirmation);

setInterval(() => {

  let payload = {
    store: chance.company(),
    orderId: chance.guid(),
    customer: chance.name(),
    address: `${chance.city()}, ${chance.state()}`,
  };

  socket.emit('JOIN', `${payload.store}`);

  console.log('-------transmitting new package---------', payload);
  socket.emit('PICKUP', payload);
}, 5000);