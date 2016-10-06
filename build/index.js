"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const socketIO = function (socket) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.meta && action.meta.socket && action.meta.socket.channel) {
          socket.emit(action.meta.socket.channel,
            action.meta.socket.payload !== undefined ? action.meta.socket.payload : action,
            function (err, data) {
              action.meta.socket.err = err;
              action.meta.socket.data = data;
              return next(action);
            });
        } else {
          return next(action);
        }
      };
    };
  };
};

exports.default = socketIO;
