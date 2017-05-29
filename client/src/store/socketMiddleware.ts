import { applyMiddleware } from 'redux';
import * as io from 'socket.io-client';
import { middleware } from 'redux-socket-middleware';
import { SEND_MESSAGE, GET_MESSAGE } from '../actions/chatActions';

export const SOCKET_ENDPOINT = 'http://localhost:8008';

export default applyMiddleware(
  middleware({
    actions: [
      SEND_MESSAGE,
      GET_MESSAGE
    ],
    resolveSocket: () => {
      return io(SOCKET_ENDPOINT);
    },
  })
);