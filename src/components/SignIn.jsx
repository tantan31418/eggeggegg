import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase.js';
import './SignIn.css';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            
        };

        this.googleSignIn = this.googleSignIn.bind(this);
    }

    

    async googleSignIn() {
        try {
          await signInWithGoogle();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
    
    render() {
        return (
            
            <div className="container d-flex h-100" >
                <div className="align-self-center w-100" style={{paddingBottom:90}}>
                    <div className="d-flex col-9 justify-content-center mx-auto" style={{marginTop:50}}>
                        <div className="d-inline-flex"><h1>\ Welcome to Happy Monster /</h1></div>
                    </div>
                    <div className="d-flex justify-content-center col-6 mx-auto button-wrapper">
                        <img src='egghero_backed.png' style={{marginTop:50 }}/>
                    </div>
                    <div className="d-flex justify-content-center col-6 mx-auto button-wrapper">
                        <Link to='/' replace>
                            <button className="button-log-in" onClick={this.googleSignIn}>
                                Log in with Google
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}