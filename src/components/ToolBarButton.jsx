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
            <div>
                <div className="settings">
                    {this.props.buttonType}
                    {/* <img src={`${this.props.buttonType}.png`} /> */}
                    <Link
                        to="/settings"
                        className="settings"
                    >
                        <img src={`${this.props.buttonType}.png`} style={{width:100,height:100}}/>
                    </Link>
                </div>
            </div>
        
        );
    }
}