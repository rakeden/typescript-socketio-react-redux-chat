import * as React from 'react';
import BottomNav from './bottomNav';
import ChatPanel from './chatPanel';
import SettingsPanel from './settingsPanel';

export default class Layout extends React.Component<any, any> {
    public render() {
        return(
            <div className="chatWrapper">
                <ChatPanel />
                <SettingsPanel />
                <BottomNav />
            </div>
        )
    }
}