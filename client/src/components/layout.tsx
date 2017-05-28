import * as React from 'react';
import BottomNav from './bottomNav';

export default class Layout extends React.Component<any, any> {
    public render() {
        return(
            <div className="chatWrapper">
                <BottomNav />
            </div>
        )
    }
}