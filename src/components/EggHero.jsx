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
        <div className='egghero'>
            <Link to="/today_rec">
                    {this.props.status === 'breed'
                        ?
                        <div className='d-flex justify-content-center'>
                            <img src={`egghero_backed.png`} />
                        </div>
                        :
                        this.props.status === 'born'
                            ?
                            (this.props.current_animal === 'dino') ? <div className='d-flex justify-content-center'><img id='born-dino' alt='born dino' src='ani_dino.png' /></div>
                                : (this.props.current_animal === 'cat') ? <div className='d-flex justify-content-center'><img id='born-cat' alt='born cat' src='ani_cat.png' /></div>
                                    : (this.props.current_animal === 'bear') ? <div className='d-flex justify-content-center'><img id='born-bear' alt='born bear' src='ani_bear.png' /></div>
                                        : <img alt='error' />
                            :
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img id='angel' alt='error' src='angel.png'/>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img id='broken-egg' alt='error' src='broken_egg.png'/>
                                </div>
                            </div>
                            // (this.props.current_animal === 'dino') ? <img alt='dead dino' src='' />
                            //     : (this.props.current_animal === 'cat') ? <img alt='dead cat' src='' />
                            //         : (this.props.current_animal === 'bear') ? <img alt='dead bear' src='' />
                            //             : <img alt='error' />
                    }
            </Link>
        </div>
        );
    }
}