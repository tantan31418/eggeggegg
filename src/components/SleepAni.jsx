import React from 'react';
import './SleepAni.css';
import PropTypes from 'prop-types';

export default class SleepAni extends React.Component{
    static propTypes = {
        current_animal : PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
        <div className='sleepAni'>
            {(this.props.current_animal) === 'dino' ? <img id='sleep-dino' src="sleepani_dino.png"/>
            : (this.props.current_animal) === 'cat' ? <img id='sleep-cat' src="sleepani_cat.png"/>
            : (this.props.current_animal) === 'bear' ? <img id='sleep-bear' src="sleepani_bear.png"/> : <img alt='error'/>    
        }
            
        </div>
        );
    }
}