import * as React from 'react';

interface Props extends React.Props<App> {
    text: string
}

class App extends React.Component<Props, null> {
    public render() {
        return(
            <p>{this.props.text}</p>
        )
    }
}

export default App;
