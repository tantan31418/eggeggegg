import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './Landing.jsx';
import TodayRec from './TodayRec.jsx';
import OtherHappy from './OtherHappy.jsx';
import SettingPage from './SettingPage.jsx';
import CollectionPage from './CollectionPage.jsx';
import RIPPage from './RIPPage.jsx';
import LoginPage from './LoginPage.jsx';
import CalendarPage from './CalendarPage.jsx';
import SignIn from './SignIn.jsx';

// import {getUser as getUserFromApi} from '../api/getUser.js';
import {list as getUserFromApi} from '../api/user.js';
import {auth , firestore} from '../firebase.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user_id : "1",
      user_data : {
        
          "id": '66',
          "name": "hello",
          "current_animal": "dino",
          "createday":'1624357600',
          "todaysscore":10,
          "weeklyscore":90,
          "monthlyscore":990,
          "historyscore":22220,
          "dailynote":3,
          "today_3_things":[1,2,3],
          "cannewanimal":0
      

      }
    };

    // getUser();
    this.getUser=this.getUser.bind(this);
  }
  componentDidMount() {
    // this.setState(...this.getUser());

    console.log('component did mount');
    // this.getUser();
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
        });
      } else {
        this.setState({
          authenticated: false,
        });
      }
    })

    var db = firestore();
    var ref = db.collection('user');

    ref.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, doc.data());
      });
    });
}

  getUser(){
    console.log('call user api');
    console.log('call getUser()');
    // let user_data = getUserFromApi(66);
    // console.log(user_data['user_data']);
    // this.setState({user_data});
    getUserFromApi(66)
      .then(
        (user_data) => {
          // console.log(res.data);
          console.log(user_data[0]);
          this.setState({user_data:{...user_data[0]}});
          console.log('getusersetstate');
          console.log(this.state);
        }
      );
    
   
  }

  render() {
    // this.getUser();
    return (
      this.state.authenticated === false ?
        <Router>
          <SignIn />
        </Router>
      :
        <Router>
        <div>
          {/* meow */}
          {/* <button onClick={this.getUser}>THIS</button> */}

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
              <TodayRec id={this.state.user_id}
              />
            )}
          />
          <Route
            exact
            path="/other_happy"
            render={() => (
              <OtherHappy id={this.state.user_data.id}
              />
            )}
          />
          <Route
            exact
            path="/Settings"
            render={() => (
              <SettingPage
              />
            )}
          />
          <Route
            exact
            path="/Collection"
            render={() => (
              <CollectionPage
              />
            )}
          />
          <Route
            exact
            path="/RIP"
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
          <Route
            exact
            path="/Calendar"
            render={() => (
              <CalendarPage
              />
            )}
          />
        </div>
      </Router>
    );
  }

  
}
