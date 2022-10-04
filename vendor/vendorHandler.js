'use strict';

let hub = require('../hub');

module.exports = (payload) =>  {
  
  // not correct yet
  
    setTimeout((storeName) => {
    hub.emit('PICKUP', payload)
    console.log(`Thank you, ${payload.customer}`)
  }, 1000);
}