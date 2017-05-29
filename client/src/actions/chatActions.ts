export const SEND_MESSAGE = 'SEND_MESSAGE'
export const GET_MESSAGE = 'GET_MESSAGE'
import { Message } from '../models/chat';

export function sendMessage(message: Message) {
    return {
        type: SEND_MESSAGE,
        meta: {remote: true},
        data: message
    };
}

export function getMessage() {
    return {
        type: GET_MESSAGE,
    };
}
