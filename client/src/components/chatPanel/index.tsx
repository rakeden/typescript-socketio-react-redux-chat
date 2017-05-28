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
    
    private static state: State = {
        messages: [{
            from: 'Jannis Migdalas',
            text: 'Message'
        },{
            from: 'Jannis Migdalas',
            text: 'Message'
        }]
    }

    public render() {
        console.log(this);
        return(
            <div className="chatView">
                <div className="chatList">
                    <Message from="Jannis Migdalas" text="Das ist meine Nachricht"/>
                </div>
                <ChatInput />
            </div>
        )
    }
}