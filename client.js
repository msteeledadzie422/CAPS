'use strict';

const hub = require('./hub');

const vendorHandler = require('./vendor/vendorHandler');
const driverHandler = require('./driver/driverHandler');


hub.on('PICKUP', driverHandler);
hub.on('DELIVERED', vendorHandler);


setInterval(() => {
  console.log('---------new interval begins---------');

}, 5000)