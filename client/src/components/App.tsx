import * as React from 'react';
import BottomNav from './BottomNav'

interface AppState {
    selectedIndex: string
}

class App extends React.Component<null, AppState> {

    select = (index: string) => {
        this.setState({selectedIndex: index})
    };

    public render() {
        return(
            <BottomNav />
        )
    }
}

export default App;
