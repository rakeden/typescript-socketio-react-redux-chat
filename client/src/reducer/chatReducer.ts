import { ChatState } from '../models/chat'
import { SEND_MESSAGE, GET_MESSAGE } from '../actions/chatActions';

const defaultState: ChatState = {
    messages: []
}

const chatReducer = (state = defaultState, action: any) => {
    console.log(action);
    switch(action.type){
        case SEND_MESSAGE:
            console.log(action.type)
            return {
                messages: action.data
            };
        case GET_MESSAGE:
            console.log(action)
            state.messages.push(action.data);
            return {
                ...state
            }
        default:
            return state;
    }
}

export default chatReducer;