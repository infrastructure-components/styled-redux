import * as React from 'react';

import {
    Environment,
    Route,
    SinglePageApp
} from "infrastructure-components";

import HomePageRoute from './home-page';

export default (
    <SinglePageApp
        stackName = "styled-redux"
        buildPath = 'build'
        region='us-east-1'>

        <Environment name="dev" />
        <HomePageRoute />

    </SinglePageApp>);