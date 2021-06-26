import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './HomeButton.css';


export default class HomeButton extends React.Component{
    render(){
        return (
            <div className='homebutton'>
                <Link to="/">
                    {/* <button>Go Home</button> */}
                    <img src='home.png'/>
                </Link>
                
            </div>
        );
    }
}