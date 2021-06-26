import React from 'react';
import OtherEgg from './OtherEgg';

export default class EggHero extends React.Component{
    render(){
        return (
            <div className='d-flex justify-content-center'>
                <div className='d-flex row'>
                    <OtherEgg/>
                    <OtherEgg/>
                    <OtherEgg/>
                    <OtherEgg/>
                    <OtherEgg/>
                    <OtherEgg/>
                </div>
            </div>
        );
    }
}