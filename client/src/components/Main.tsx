import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, darkBaseTheme} from "material-ui/styles";
import Paper from 'material-ui/Paper';
import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const darkMuiTheme = getMuiTheme(darkBaseTheme);

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

class Main extends React.Component<any, any> {
    public render() {
        return(
            <MuiThemeProvider muiTheme={darkMuiTheme}>
                <div style={styles.wrapper}>
                    <Paper style={styles.paper} zDepth={1} >
                        <App />
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Main