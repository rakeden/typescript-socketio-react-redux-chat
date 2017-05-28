import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ChatPanel from './chatPanel';
import SettingsPanel from './settingsPanel';

export default class Layout extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { 
            slideIndex: 0
        }
    }

    handleChange = (index: number) => {
        this.setState({slideIndex: index})
    };

    public render() {
        return(
            <div className="chatLayout">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Messages" value={0} />
                    <Tab label="Settings" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div className="tabPanel">
                        <ChatPanel />
                    </div>
                    <div  className="tabPanel">
                        <SettingsPanel />
                    </div>
                </SwipeableViews>
            </div>
        )
    }
}