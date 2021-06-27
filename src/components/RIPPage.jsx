import React from 'react';
import HomeButton from './HomeButton';

export default class RIPPage extends React.Component{
    render(){
        return (
            <div>
                {/* RIPPage */}
                <HomeButton/>
                <div className='d-flex justify-content-center'>
                    <img src='Tombstone.png'/>
                </div>
            </div>
        
        );
    }
}