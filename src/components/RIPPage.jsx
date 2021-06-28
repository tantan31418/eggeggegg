import React from 'react';
import HomeButton from './HomeButton';
import PropTypes from 'prop-types';
import './RIPPage.css';

export default class RIPPage extends React.Component{
    static propTypes = {
        id : PropTypes.string,
        dino : PropTypes.number,
        cat : PropTypes.number,
        bear : PropTypes.number

    }
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render(){
        return (
            <div>
                <HomeButton/>
                <div className='d-flex row tombstones'>
                    <div className='tombstone d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3'>
                        <div>
                            <img src='Tombstone.png'/>
                            <div className='RIP-text d-flex justify-content-center'>
                                <p> RIP dino &nbsp;<span>{this.props.dino}</span>&nbsp;隻</p>
                            </div>
                        </div>
                    </div>
                    <div className='tombstone d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3'>
                        <div>
                            <img src='Tombstone.png'/>
                            <div className='RIP-text d-flex justify-content-center'>
                                <p> RIP cat &nbsp;<span>{this.props.cat}</span>&nbsp;隻</p>
                            </div>
                        </div>
                    </div>
                    <div className='tombstone d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3'>
                        <div>
                            <img src='Tombstone.png'/>
                            <div className='RIP-text d-flex justify-content-center'>
                                <p> RIP bear &nbsp;<span>{this.props.bear}</span>&nbsp;隻</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}