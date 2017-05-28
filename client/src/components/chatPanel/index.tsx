import * as React from 'react';
import Message from '../message/';
import ChatInput from '../chatInput/';
import './styles.scss';

export default class ChatPanel extends React.Component<any, any> {
    public render() {
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