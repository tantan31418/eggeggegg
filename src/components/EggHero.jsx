import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './EggHero.css';

export default class EggHero extends React.Component{
    render(){
        return (
        <div>
            <Link to="/today_rec">
                <img src={`egghero_backed.png`}/>
            </Link>
        </div>
        );
    }
}