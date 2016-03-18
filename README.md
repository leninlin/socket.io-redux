# socket.io-redux
Redux middleware to emit action via socket.io.

## API
```javascript
import io from 'socket.io-client';
import { createStore, applyMiddleware } from 'redux';

import socketIO from 'socket.io-redux';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(
  socketIO(io.connect(process.env.NODE_ENV))
));
```
* `socketIO` receive a `socket` instance created by `io.connect(url)`.
