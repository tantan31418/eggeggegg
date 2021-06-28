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
                        <img src={`egghero_backed.png`} />
                        :
                        this.props.status === 'born'
                            ?
                            (this.props.current_animal === 'dino') ? <img alt='born dino' src='ani_dino.png' />
                                : (this.props.current_animal === 'cat') ? <img alt='born cat' src='ani_cat.png' />
                                    : (this.props.current_animal === 'bear') ? <img alt='born bear' src='ani_bear.png' />
                                        : <img alt='error' />
                            :
                            (this.props.current_animal === 'dino') ? <img alt='dead dino' src='' />
                                : (this.props.current_animal === 'cat') ? <img alt='dead cat' src='' />
                                    : (this.props.current_animal === 'bear') ? <img alt='dead bear' src='' />
                                        : <img alt='error' />
                    }
            </Link>
        </div>
        );
    }
}