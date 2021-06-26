import React from 'react';
import OtherEgg from './OtherEgg';
import PropTypes from 'prop-types';

import {list as getOtherHappyFromApi} from '../api/post.js';



export default class OtherEggs extends React.Component{
    static propTypes = {
        id: PropTypes.number
        
    }

    constructor(props){
        super(props);
        this.state = {
            show:false,
            otherPosts:[
                {text:'foo'},
                {text:'foo'},
                {text:'foo'},
                {text:'foo'},
                {text:'foo'},
                {text:'foo'}
            ]
        };
        this.getHappy = this.getHappy.bind(this);
    }

    componentDidMount(){
        this.getHappy();
    }

    getHappy(){
        getOtherHappyFromApi(this.props.id,'others')
        .then(
            (res) => {
                console.log(res);
                console.log(res[0].text);
                this.setState({otherPosts:res});
                console.log(this.state.otherPosts[0].text);
            }
        )
    }
    
    render(){
        return (
            <div className='d-flex justify-content-center'>
                <div className='d-flex row'>
                    <OtherEgg happyText={this.state.otherPosts[0].text}/>
                    <OtherEgg happyText={this.state.otherPosts[1].text}/>
                    <OtherEgg happyText={this.state.otherPosts[2].text}/>
                    <OtherEgg happyText={this.state.otherPosts[3].text}/>
                    <OtherEgg happyText={this.state.otherPosts[4].text}/>
                    <OtherEgg happyText={this.state.otherPosts[5].text}/>
                </div>
            </div>
        );
    }
}