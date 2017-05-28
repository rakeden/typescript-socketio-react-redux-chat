import * as React from 'react';
import Message from '../message/';
import ChatInput from '../chatInput/';
import './styles.scss';

interface MessageItem {
    from: string;
    text: string
}

interface MessageItems extends Array<MessageItem> {}

interface State {
    messages: MessageItems;
}

export default class ChatPanel extends React.Component<any, State> {
    
    constructor(props: any){
        super(props);
    }
    
    state: State = {
        messages: [{
            from: 'Jannis Migdalas',
            text: 'Message'
        },{
            from: 'Jannis Migdalas',
            text: 'Message und so weiter und viel mehr Text so fortgesetzt'
        }]
    }

    public render() {
        console.log(this);
        return(
            <div className="chatView">
                <div className="chatList">
                    {this.state.messages.map( (message: MessageItem, index) => 
                        <Message key={index} from={message.from} text={message.text}/>  
                    )}
                </div>
                <ChatInput />
            </div>
        )
    }
}