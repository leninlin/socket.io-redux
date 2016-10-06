const socketIO = socket => () => next => action => {
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

export default socketIO;
