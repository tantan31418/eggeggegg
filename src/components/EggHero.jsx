import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './EggHero.css';

export default class EggHero extends React.Component{
    static propTypes = {
        current_animal: PropTypes.string,
        status: PropTypes.string
    }
    
    constructor(props){
        super(props);
        // console.log(auth.getCurrentUser());
    }

    render(){
        return (
        <div>
            <Link to="/today_rec">
                {this.props.status === 'breed'
                ?
                <img src={`egghero_backed.png`}/>
                :
                this.props.status === 'born'
                    ?
                    <img alt='map to current born' />
                    :
                    <img alt='map to current dead' />
                }
            </Link>
        </div>
        );
    }
}