import React from 'react';
import OtherEgg from './OtherEgg';
import PropTypes from 'prop-types';
import { firestore } from '../firebase.js';

import {list as getOtherHappyFromApi} from '../api/post.js';



export default class OtherEggs extends React.Component{
    static propTypes = {
        
        
    }

    constructor(props){
        super(props);
        this.state = {
            show:false,
            otherPosts:[
                {content:'foo'},
                {content:'foo'},
                {content:'foo'},
                {content:'foo'},
                {content:'foo'},
                {content:'foo'}
            ]
        };
        this.getHappy = this.getHappy.bind(this);
    }

    componentDidMount(){
        this.getHappy();
    }

    getHappy(){
        let db = firestore();
        let res = [];
        db.collection('redacted_post')
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            //   console.log(doc.id, doc.data());
            //   console.log(doc.data());
              res.push(doc.data());
            //   this.setState({});
            });
            
            this.setState({otherPosts:res});
          });
    }
    
    render(){
        return (
            <div className='d-flex justify-content-center' style={{marginTop:30}}>
                <div className='d-flex row'>
                    <OtherEgg happyText={this.state.otherPosts[0].content}/>
                    <OtherEgg happyText={this.state.otherPosts[1].content}/>
                    <OtherEgg happyText={this.state.otherPosts[2].content}/>
                    <OtherEgg happyText={this.state.otherPosts[3].content}/>
                    <OtherEgg happyText={this.state.otherPosts[4].content}/>
                    <OtherEgg happyText={this.state.otherPosts[5].content}/>
                </div>
            </div>
        );
    }
}