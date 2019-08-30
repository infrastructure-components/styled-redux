import React from 'react';

import { Route } from 'infrastructure-components';
import Page from '../integration/page';
import HomePage from './home-page';

export default function HomePageRoute () {

    return <Route
        path='/'
        name='Home Page'
        render={()=><Page><HomePage/></Page>}
    />
}