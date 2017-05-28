import * as React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
    BottomNavigation,
    BottomNavigationItem
} from 'material-ui/BottomNavigation';
import './styles.scss';

const chatIcon = <FontIcon className="material-icons">chat</FontIcon>;
const settingsIcon = <FontIcon className="material-icons" >settings</FontIcon>;

class BottomNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { selectedIndex: 0 }
    }

    select = (index: number) => {
        this.setState({selectedIndex: index})
    };

    public render() {
        console.log(this);
        return(
            <BottomNavigation 
                selectedIndex={this.state.selectedIndex}
                className="bottomNav"
            >
                <BottomNavigationItem
                    label="Chat"
                    icon={chatIcon}
                    className="bottomNavButton"
                    onTouchTap={() => this.select(0)}
                />
                <BottomNavigationItem
                    label="Settings"
                    icon={settingsIcon}
                    className="bottomNavButton"
                    onTouchTap={() => this.select(1)}
                />
            </BottomNavigation>
        )
    }
}

export default BottomNav