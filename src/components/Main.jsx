import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './Landing.jsx';
import TodayRec from './TodayRec.jsx';
import OtherHappy from './OtherHappy.jsx';
import SettingPage from './SettingPage.jsx';
import CollectionPage from './CollectionPage.jsx';
import RIPPage from './RIPPage.jsx';
import LoginPage from './LoginPage.jsx';

import {getUser as getUserFromApi} from '../api/getUser.js';



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id : "1",
      user_data : {
        
          "uid": 0,
          "username": "hello",
          "current_animal": "dino",
          "score" :{
              "today_score":10,
              "week_score":90,
              "month_score":990,
              "history_score":22220
          },
          "today_recorded":3,
          "today_3_things":[
              {
                  "post_id":1,
                  "post_content":"JS is so hard",
                  "post_score":0
              },
              {
                  "post_id":2,
                  "post_content":"JS is so difficult",
                  "post_score":0
              },
              {
                  "post_id":3,
                  "post_content":"JS is so frustrating",
                  "post_score":0
              }
          ],
          "status":"breeding"
      

      }
    };

    // getUser();
    this.getUser=this.getUser.bind(this);
  }
  componentDidMount() {
    // this.setState(...this.getUser());

    console.log('component did mount');
    // this.getUser();
}

  getUser(){
    console.log('call user api');
    console.log('call getUser()');
    let user_data = getUserFromApi();
    // console.log(user_data['user_data']);
    this.setState({user_data});
    console.log('getusersetstate');
    console.log(this.state);
    // getUserFromApi()
    //   .then((user) => {
    //     this.setState({
    //       user
    //     });
    //   })
    //   .catch((err) => {
    //     console.error('Error getting user', err);
    // //     // this.endLoading();
    //   });
  }

  render() {
    // this.getUser();
    return (
      <Router>
        <div>
          meow
          <button onClick={this.getUser}>THIS</button>

          <Route
            exact
            path="/"
            render={() => (
              <Landing {...this.state.user_data} foo_update={this.getUser}
              />
            )}
          />
          <Route
            exact
            path="/today_rec"
            render={() => (
              <TodayRec
              />
            )}
          />
          <Route
            exact
            path="/other_happy"
            render={() => (
              <OtherHappy
              />
            )}
          />
          <Route
            exact
            path="/settings"
            render={() => (
              <SettingPage
              />
            )}
          />
          <Route
            exact
            path="/collection"
            render={() => (
              <CollectionPage
              />
            )}
          />
          <Route
            exact
            path="/rip"
            render={() => (
              <RIPPage
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <LoginPage
              />
            )}
          />
        </div>
      </Router>
    );
  }

  
}
