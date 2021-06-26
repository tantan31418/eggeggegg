import React from 'react';
import './OtherEgg.css';

export default class OtherEgg extends React.Component{
    render(){
        return (
        <div className='d-flex col-12 col-md-6 col-lg-4 Egg justify-content-center'>
            <img src={`egghero_backed.png`}/>
        </div>
        );
    }
}