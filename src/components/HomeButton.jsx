import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class HomeButton extends React.Component{
    render(){
        return (
            <div>
                <Link
                    to="/"
                >

                <button>Go Home</button>
                </Link>
                
            </div>
        );
    }
}