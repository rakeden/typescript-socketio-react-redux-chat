import * as React from 'react';
import { connect } from 'react-redux'
import Message from '../message/';
import ChatInput from '../chatInput/';
import './styles.scss';
import * as actions from '../../actions/chatActions';
import { actionCreators } from 'redux-socket-middleware';


interface MessageItem {
    from: string;
    text: string
}

interface ChatPanelState {
    messages: MessageItem[];
}

interface ChatPanelProps {
    onMessageSubmit(from: string, message: string): void;
    dispatch(action: any): void;
}

class ChatPanel extends React.Component<ChatPanelProps, ChatPanelState> {
    
    constructor(props: ChatPanelProps){
        super(props);
        console.log(this);
        this.sendMessage('Jannis', 'Jo');
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actionCreators.connect());
    }
    
    public state: ChatPanelState = {
        messages: []
    }

    public render() {
        
        return(
            <div className="chatView">
                <div className="chatList">
                    {this.state.messages.map( (message: MessageItem, index) => 
                        <Message key={index} from={message.from} text={message.text}/>  
                    )}
                </div>
                <ChatInput onMessageSubmit={this.sendMessage} />
            </div>
        )
    }

    public sendMessage(text, from){
        this.props.dispatch(
            actions.sendMessage({
                text: text,
                from: from
            })
        );
    }

}

const mapStateToProps = (state: ChatPanelState, ownProps: any) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ChatPanel)