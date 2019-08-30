import React from 'react';
import { createStore, combineReducers } from 'redux';
import exampleReducer from '../home-page/example-reducer';

const rootReducer = combineReducers({
    exampleReducer

});

export function getRoot(state) {
    return state
};

export default function withReduxStore(Component) {
    return function WrapperComponent(props) {
        return (

            <Component
                {...props}
                reduxStore={ createStore(rootReducer) }
            />

        );
    };
};
