import * as React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

interface BottomNavProps {}

interface BottomNavState {
    selectedIndex: number
}

class BottomNav extends React.Component<BottomNavProps, BottomNavState> {
    constructor(props, context) {
        super(props, context);
    }

    select = (index: number) => {
        this.setState({selectedIndex: index})
    };

    public render() {
        return(
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    label="Chat"
                    icon={recentsIcon}
                    onTouchTap={() => this.select(0)}
                />
                <BottomNavigationItem
                    label="Settings"
                    icon={favoritesIcon}
                    onTouchTap={() => this.select(1)}
                />
            </BottomNavigation>
        )
    }
}

export default BottomNav;
