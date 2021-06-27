import React from 'react';
import HomeButton from './HomeButton';
import { signOutApp } from '../firebase.js';


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
            <button onClick={this.signOut}>Sign Out</button>
        </div>
        );
    }
}