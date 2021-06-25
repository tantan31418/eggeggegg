import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './Landing.jsx';
import TodayRec from './TodayRec.jsx';
import OtherHappy from './OtherHappy.jsx';
import SettingPage from './SettingPage.jsx';
import CollectionPage from './CollectionPage.jsx';
import RIPPage from './RIPPage.jsx';
import LoginPage from './LoginPage.jsx';


export default class Main extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    return (
      <Router>
        <div>
          meow

          <Route
            exact
            path="/"
            render={() => (
              <Landing
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
