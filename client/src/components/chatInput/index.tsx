import * as React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const SendIcon = <FontIcon className="material-icons">send</FontIcon>;

interface ChatInputProps {
    handleChange(event: any): void;
    handleSubmit(event: any): void;
    onMessageSubmit(from: string, message: string): void;    
}

interface ChatInputState {
    text: string;
    from: string;
}

export default class ChatInput extends React.Component<any, ChatInputState> {

    constructor(props: ChatInputProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public state: ChatInputState = {
        text: '',
        from: 'anonymous'
    }

    public render() {
        return (
            <div className="chatInput">
                <TextField
                    name="text"
                    className="textField"
                    hintText="Your Message"
                    multiLine={true}
                    rows={1}
                    rowsMax={3}
                    onChange={this.handleChange}
                />
                <IconButton
                    className="sendButton"
                    onClick={this.handleSubmit}
                >
                    <FontIcon className="material-icons">send</FontIcon>
                </IconButton>
            </div>
        )
    }

    handleChange(event: any){
        event.preventDefault();
        this.setState({
            text: event.target.value
        });
    }

    handleSubmit(event: any){
        event.preventDefault();
        let { text, from } = this.state;
        if(!text.length){
            return false;
        }
        this.props.onMessageSubmit(text, from);
    }

}