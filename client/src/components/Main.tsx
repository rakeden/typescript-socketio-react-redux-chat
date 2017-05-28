import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
import Paper from 'material-ui/Paper';
import Layout from './layout';
import './styles.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// setting material-ui dark theme
const lightkMuiTheme = getMuiTheme(lightBaseTheme);

export default class Main extends React.Component<any, any> {
    public render() {
        return(
            <MuiThemeProvider muiTheme={lightkMuiTheme}>
                <div className="appWrapper">
                    <Paper className="chatWrapper" zDepth={3} >
                        <Layout />
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
}