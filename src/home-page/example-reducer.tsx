
import { getRoot } from '../store/reducer';
import { createSelector } from 'reselect'

export const ACTION = {
    SET: "SET"
}

export const ID = {
    ACTIVE: "active"
};


export const getExampleRoot = createSelector(
    getRoot,
    ({ exampleReducer }) => exampleReducer
);


export const getActive = createSelector(
    getExampleRoot,
    currentState => currentState[ID.ACTIVE]
);

export const setActive= (isActive: boolean) => {

    return {
        type: `${ID.ACTIVE}/${ACTION.SET}`,
        payload: isActive
    }
};


const defaultState = {};
defaultState[ID.ACTIVE] = false;


export default function exampleReducer(state = defaultState, { type, payload }) {

    //console.log(type, payload)
    const id =  type.substring(0, type.indexOf("/"));
    const action = type.substring(type.indexOf("/")+1);

    const newState = Object.assign({}, state);

    if (action == ACTION.SET && payload !== undefined) {

        newState[id] = payload;
    }


    return newState;
}