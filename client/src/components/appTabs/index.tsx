import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import './styles.scss'

interface State {
    slideIndex: number
}

interface Props {
    children?: any
}

export default class AppTabs extends React.Component<Props, State> {
    
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
                    className="tabControls"
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
                    {this.props.children}
                </SwipeableViews>
            </div>
        )
    }
}