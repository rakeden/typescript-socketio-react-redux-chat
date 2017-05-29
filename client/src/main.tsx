import * as React from 'react';
import Layout from './components/layout';

export default class Main extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <Layout />
        )
    }
}