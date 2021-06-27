import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase.js';

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
            <div>
                
                   
                        Sign Up to
                        <Link to="/">Egg</Link>
                    
                        <button onClick={this.googleSignIn} type="button">
                            Sign up with Google
                        </button>
                
            </div>
        )
    }
}