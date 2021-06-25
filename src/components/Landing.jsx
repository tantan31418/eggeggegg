import React from 'react';

import ToolBar from '../components/ToolBar.jsx';
import EggHero from '../components/EggHero.jsx';
import TdRcCount from '../components/TdRcCount.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import PostModal from './PostModal.jsx';


export default class Landing extends React.Component{
    render(){
        return (
        <div>
            Landing
            <ToolBar/>
            <p>想不到開心的事嗎？</p>
            <a href="/other_happy">看看別人因為什麼感到開心...</a>
            <EggHero/>
            <TdRcCount count={2}/>
            <PostModal/>
            
            <ScoreBoard/>
        </div>
        );
    }
}