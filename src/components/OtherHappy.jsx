import React from 'react';
import OtherEggs from './OtherEggs';
import HomeButton from './HomeButton';

export default class OtherHappy extends React.Component{
    render(){
        return (
        <div>
            OtherHappy
            <HomeButton/>
            <OtherEggs/>
        </div>
        );
    }
}