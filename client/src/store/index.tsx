import { createStore, compose } from 'redux';
import * as io from 'socket.io-client';
import rootReducer from '../reducer/'; 
import { Message } from "../models/chat";
import socketMiddleWare from './socketMiddleWare';

const finalCreateStore = compose(
    socketMiddleWare
)(createStore);

export default function create(initial = {}) {
    return finalCreateStore(rootReducer, initial);
}