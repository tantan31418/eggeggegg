import React from 'react';

import ToolBar from '../components/ToolBar.jsx';
import EggHero from '../components/EggHero.jsx';
import TdRcCount from '../components/TdRcCount.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import PostModal from './PostModal.jsx';
import './Landing.css';


export default class Landing extends React.Component{
    render(){
        return (
        <div>
            Landing
            <ToolBar/>
            <div className="d-flex justify-content-center land-center">
                <div>
                    <p id='think'>想不到開心的事嗎？</p>
                    <a href="/other_happy">看看別人因為什麼感到開心...</a>
                    <EggHero/>
                    <TdRcCount count={2}/>
                    <div className="d-flex justify-content-center"><PostModal/></div>
                    
                    <ScoreBoard/>
                </div>
            </div>
        </div>
        );
    }
}