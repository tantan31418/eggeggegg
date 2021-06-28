import React from 'react';
import HomeButton from './HomeButton';
import PropTypes from 'prop-types';

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
                <div className='d-flex justify-content-center'>
                    <img src='Tombstone.png'/>
                    <p> RIP dino <span>{this.props.dino}</span>隻</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src='Tombstone.png'/>
                    <p> RIP cat <span>{this.props.cat}</span>隻</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src='Tombstone.png'/>
                    <p> RIP bear <span>{this.props.bear}</span>隻</p>
                </div>
            </div>
        
        );
    }
}