import React from 'react';
import HomeButton from './HomeButton';
import { signOutApp } from '../firebase.js';
import { Link } from 'react-router-dom';

import './SettingPage.css'


export default class SettingPage extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            
        };

        this.signOut = this.signOut.bind(this);
    }

    async signOut() {
        try {
          await signOutApp();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
    render(){
        return (
        <div>
            {/* SettingPage */}
            <HomeButton/>
            <div className="container d-flex h-100" style={{ top:"8rem" }}>
                <div className="row align-self-center w-100">
                    <div className="d-flex justify-content-center col-6 mx-auto button-wrapper">
                            <Link to='/' replace>
                                <button className="button-log-in" id='logout-botton' onClick={this.signOut}>
                                    Log out
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}