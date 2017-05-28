import * as React from 'react';
import BottomNav from './BottomNav';

const styles = {
    wrapper: {
        display: 'flex'
    },
    bottomNav: {
        flex: 1
    },
}

class App extends React.Component<any, any> {

    public render() {
        return(
            <div style={styles.wrapper} >
                <BottomNav  style={styles.bottomNav} />
            </div>
        )
    }
}

export default App