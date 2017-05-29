import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, darkBaseTheme} from "material-ui/styles";
import Paper from 'material-ui/Paper';
import App from './app';
import './styles.scss';

// setting material-ui dark theme
const darkMuiTheme = getMuiTheme(darkBaseTheme);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class extends React.Component<any, any> {
    public render(){
        return(
            <MuiThemeProvider muiTheme={darkMuiTheme}>
                <div className="appWrapper">
                    <Paper className="chatWrapper" zDepth={3} >
                        <App />
                    </Paper>
                </div>
            </MuiThemeProvider>

        )
    }
}