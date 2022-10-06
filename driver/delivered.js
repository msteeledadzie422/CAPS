'use strict';

module.exports = (socket) => (payload) =>  {
  setTimeout(() => {
    socket.emit('DELIVERED', payload);
    socket.disconnect();
  }, 2000);
};