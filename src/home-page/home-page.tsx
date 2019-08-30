import React from 'react';

import { useSelector, useDispatch } from 'react-redux'

interface IHomePageProps {

}

import {
    getActive,
    setActive,
} from './example-reducer';

export default function HomePage (props: IHomePageProps) {


    const active = useSelector(getActive);
    const dispatch = useDispatch();

    return <div>
        This is the HomePage
        <input type="checkbox" onChange={event => dispatch(setActive(event.target.checked))} checked={active}/>

    </div>
}