import React from 'react';
import './SleepAni.css';

export default class SleepAni extends React.Component{
    render(){
        return (
        <div className='sleepAni'>
            <img src={`sleepani_dino.png`}/>
        </div>
        );
    }
}