import React from 'react';
import './CollectionPage.css';
import HomeButton from './HomeButton';

export default class CollectionPage extends React.Component{
    render(){
        return (
        <div>
            CollectionPage
            <HomeButton/>
            <div className='blank_collection'></div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex row'>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <span>
                            <img id='ani-1' src='ani_bear.png'/>
                            <img id='ani-2' src='ani_bear.png'/>
                        </span>                        
                        <img src='Table-1.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <span>
                            <img id='ani-1' src='ani_dino.png'/>
                            <img id='ani-2' src='ani_cat.png'/>
                        </span> 
                        <img src='Table-2.png'/>
                    </div>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <img src='Table-3.png'/>
                    </div>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <img src='Table-1.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <img src='Table-2.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <img src='Table-3.png'/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
