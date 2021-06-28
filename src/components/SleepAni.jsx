import React from 'react';
import './SleepAni.css';

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
            {(this.props.current_animal) === 'dino' ? <img src="sleepani_dino.png"/>
            : (this.props.current_animal) === 'cat' ? <img src="sleepani_cat.png"/>
            : (this.props.current_animal) === 'bear' ? <img src="sleepani_bear.png"/> : <img alt='error'/>    
        }
            
        </div>
        );
    }
}