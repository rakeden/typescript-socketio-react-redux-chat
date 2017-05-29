import * as React from 'react';
import Paper from 'material-ui/Paper';
import './styles.scss';

interface Props {
    from: string,
    text: string,
}

export default class Message extends React.Component<Props, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const { text, from } = this.props;

        return (
            <Paper zDepth={3} className="message">
                <p>
                    <span className="from">{from}</span>
                    <span className="text">{text}</span>
                </p>
            </Paper>
        )
    }
}