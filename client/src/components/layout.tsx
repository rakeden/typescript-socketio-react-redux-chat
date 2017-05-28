import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppTabs from './appTabs';
import ChatPanel from './chatPanel';
import SettingsPanel from './settingsPanel';

export default class Layout extends React.Component<any, any> {
    public render() {
        return(
            <div className="chatLayout">
                <AppTabs>
                    <div className="tabPanel">
                        <ChatPanel />
                    </div>
                    <div className="tabPanel">
                        <SettingsPanel />
                    </div>
                </AppTabs>
            </div>
        )
    }
}