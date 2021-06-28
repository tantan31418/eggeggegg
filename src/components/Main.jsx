import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './Landing.jsx';
import TodayRec from './TodayRec.jsx';
import OtherHappy from './OtherHappy.jsx';
import SettingPage from './SettingPage.jsx';
import CollectionPage from './CollectionPage.jsx';
import RIPPage from './RIPPage.jsx';
// import LoginPage from './LoginPage.jsx';
import CalendarPage from './CalendarPage.jsx';
import SignIn from './SignIn.jsx';
import './Main.css';


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
    this.handleAuthed=this.handleAuthed.bind(this);
    this.createUser=this.createUser.bind(this);
    this.createAnimal=this.createAnimal.bind(this);
  }

  handleAuthed = () => this.setState({authenticated:true});
  componentDidMount() {
    // this.setState(...this.getUser());

    console.log('component did mount');
    // this.getUser();
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          // authenticated: true,
          auth_user_id:user.uid
        },this.getUser);
      } else {
        this.setState({
          authenticated: false,
          auth_user_id:'',
          auth_user_data:{}
        });
      }
    })

    
}

  getUser(){
    // can also work as update function (update frontend's data)
    let db = firestore();
    db.collection('user').doc(this.state.auth_user_id).get()
    .then((doc)=>{
        if (doc.exists){
          //get old user
          console.log(doc.data());
          this.setState({auth_user_data:doc.data()},this.handleAuthed);
        }
        else {
          //create user
          console.log('create new user');
          this.createUser();
        }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
   
  }

  createUser(){
    let db = firestore();
        db.collection("user").doc(this.state.auth_user_id)
        .set({
          collection: {dino: 0, cat: 0, bear: 0},
          current_animal: "",
          current_animal_id: "",
          cur_ani_create_date:null,
          rip: {cat: 0, bear: 0, dino: 0},
          score: {today_score: 0, month_score: 0, week_score: 0, history_score: 0},
          status: "new_egg",
          today_recorded: 0,
          user_create_date:firestore.FieldValue.serverTimestamp() 
        }, { merge: true })
        .then(
          db.collection('user').doc(this.state.auth_user_id).get()
          .then(
            (doc)=>{
              console.log(doc);
              this.setState({auth_user_data:doc.data()},this.handleAuthed);
            }
          )
        );
  }

  createAnimal(ani){
    //pass this func down to createAni
    //choose new animal
    //update user's current animal, status ...
    //create a new instance in animal
    //add checks to prevent multi ani created
    console.log('create new animal');
    let new_ani_id = '';
    let db = firestore();
    db.collection('animal')
      .add({
        animal_status: 'breed',
        animal_type: ani,
        ani_create_date: firestore.FieldValue.serverTimestamp(),
        uid: this.state.auth_user_id
      }).then(
        () => {
          db.collection('animal')
            .where('uid', '==', this.state.auth_user_id)
            .where('animal_status', '==', 'breed')
            .get().then(querySnap => {
              querySnap.forEach(doc => {
                //there should only be one animal active
                // new_ani_id = doc.id;
                db.collection('user').doc(this.state.auth_user_id)
                  .set({
                    //update backend user
                    current_animal: ani,
                    current_animal_id: doc.id,
                    cur_ani_create_date:doc.data().ani_create_date,
                    status: "breed"
                  }, { merge: true }).then(
                    this.getUser()
                    //update frontend user
                  )
              })
            }
            )
        }


      )

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

          <Route
            exact
            path="/"
            render={() => (
              <Landing 
              id={this.state.auth_user_id}
              {...this.state.auth_user_data}
              create_animal={this.createAnimal}
              updateUser={this.getUser}
              />
            )}
          />
          <Route
            exact
            path="/today_rec"
            render={() => (
              <TodayRec id={this.state.auth_user_id}
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
                id={this.state.auth_user_id}
                {...this.state.auth_user_data.collection}
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
          {/* <Route
            exact
            path="/login"
            render={() => (
              <LoginPage
              />
            )}
          /> */}
          <Route
            exact
            path="/Calendar"
            render={() => (
              <CalendarPage id={this.state.auth_user_id}
              />
            )}
          />
        </div>
      </Router>
    );
  }

  
}
