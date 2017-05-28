import * as React from 'react';
import Paper from 'material-ui/Paper';

interface Props {
    from: string,
    text: string,
}


export default class Message extends React.Component<Props, any> {

    constructor(props: any) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <Paper zDepth={3} className="message">
                <p>
                    <span className="from">Jannis Migdalasundco</span>
                    <span className="text">Das ist meine etwas längere Nachricht</span>
                </p>
            </Paper>
        )
    }
}