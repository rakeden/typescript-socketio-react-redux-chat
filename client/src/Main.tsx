import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
const lightMuiTheme = getMuiTheme(lightBaseTheme);
import Paper from 'material-ui/Paper';
import App from './components/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
    wrapper: {
        backgroundColor: '#FAFAFA',
        minHeight: '100vh'
    },
    paper: {
        height: 667,
        width: 375,
        maxHeight: 667,
        MaxWidth: 375,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    }
};

// interface Props extends React.Props<Main> {
//     text: string
// }

class Main extends React.Component<null, null> {
    public render() {
        return(
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <div style={styles.wrapper}>
                    <Paper style={styles.paper} zDepth={1} >
                        <App />
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Main;
