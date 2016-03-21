import test from 'tape';
import socketIO from '../build/index';

function next(action) { return action; }

test('socket.io middleware', t => {
  t.plan(3);

  const testAction = {
    type: 'ADD_NEW',
    payload: 'hello world!',
    meta: {
      socket: {
        channel: 'add:new',
      },
    },
  };

  const socket = {
    emit(channel, data) {
      t.equals(channel, 'add:new', 'it should have the channel "add:new"');
      t.deepEquals(data, testAction, 'it should have the action as data');
    },
  };

  const action = socketIO(socket)()(next)(testAction);

  t.deepEquals(action, testAction, 'it should the return the passed action');
});
