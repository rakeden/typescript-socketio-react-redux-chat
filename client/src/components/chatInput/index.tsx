import * as React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const SendIcon = <FontIcon className="material-icons">send</FontIcon>;

export default class ChatInput extends React.Component<any, any> {

    render() {
        return (
            <div className="chatInput">
                <TextField
                    className="textField"
                    hintText="Your Message"
                    multiLine={true}
                    rows={1}
                    rowsMax={3}
                />
                <IconButton
                    className="sendButton"
                >
                    <FontIcon className="material-icons">send</FontIcon>
                </IconButton>
            </div>
        )
    }
}