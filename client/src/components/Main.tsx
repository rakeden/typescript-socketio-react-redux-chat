import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, darkBaseTheme} from "material-ui/styles";
import Paper from 'material-ui/Paper';
import Layout from './layout';
import './styles.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// setting material-ui dark theme
const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class Main extends React.Component<any, any> {
    public render() {
        return(
            <MuiThemeProvider muiTheme={darkMuiTheme}>
                <div className="appWrapper">
                    <Paper className="ui-wrapper" zDepth={1} >
                        <Layout />
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}