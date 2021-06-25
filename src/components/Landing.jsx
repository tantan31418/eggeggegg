import React from 'react';

import ToolBar from '../components/ToolBar.jsx';
import EggHero from '../components/EggHero.jsx';
import TdRcCount from '../components/TdRcCount.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import PostModal from './PostModal.jsx';

import PropTypes from 'prop-types';



export default class Landing extends React.Component{
    static propTypes = {
        uid: PropTypes.number,
        username: PropTypes.string,
        current_animal: PropTypes.string,
        score :PropTypes.object,
        today_recorded:PropTypes.number,
        today_3_things:PropTypes.array,
        status:PropTypes.string,
        foo_update:PropTypes.func
    
    }
    
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            Landing
            <ToolBar/>
            <p>想不到開心的事嗎？</p>
            <button onClick={this.props.foo_update}>foo update</button>
            <a href="/other_happy">看看別人因為什麼感到開心...</a>
            <EggHero/>
            <TdRcCount count={2}/>
            <PostModal/>
            
            <ScoreBoard score={this.props.score}/>
        </div>
        );
    }
}