'use strict';

let hub = require('../hub');

module.exports = (payload) =>  {
  setTimeout((storeName) => {
    console.log(`DRIVER: picked up ${payload.orderID}`)
    hub.emit('IN-TRANSIT', payload)
    console.log(`DRIVER: delivered ${payload.orderID}`)
    hub.emit('DELIVERED', payload)
  }, 1000);
}