const socketIO = socket => () => next => action => {
  if (action.meta && action.meta.socket && action.meta.socket.channel) {
    socket.emit(action.meta.socket.channel, action.meta.payload !== undefined ? action.meta.payload : action);
  }

  return next(action);
};

export default socketIO;
