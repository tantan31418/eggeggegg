import React from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './ToolBarButton.css';
// import '../assets/image/Settings.png';


export default class ToolBarButton extends React.Component{
    static propTypes = {
        buttonType : PropTypes.string
    }
    
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='d-flex'>
                <div className='d-inline-flex button'>
                    {/* {this.props.buttonType} */}
                    <Link to={`/${this.props.buttonType}`}>
                        {/* "/settings" */}
                        <img src={`${this.props.buttonType}.png`}/>
                    </Link>
                </div>
            </div>
        
        );
    }
}