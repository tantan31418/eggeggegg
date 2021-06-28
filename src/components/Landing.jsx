import React from 'react';

import ToolBar from '../components/ToolBar.jsx';
import EggHero from '../components/EggHero.jsx';
import CreateAni from '../components/CreateAni.jsx';
import TdRcCount from '../components/TdRcCount.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import PostModal from './PostModal.jsx';
import './Landing.css';

import PropTypes from 'prop-types';
import {auth,firestore} from '../firebase.js';



export default class Landing extends React.Component{
    static propTypes = {
        id: PropTypes.string,
        current_animal: PropTypes.string,
        current_animal_id: PropTypes.string,
        today_recorded: PropTypes.number,
        collection: PropTypes.object,
        rip: PropTypes.object,
        score: PropTypes.object,
        status: PropTypes.string,
        create_date: PropTypes.instanceOf(firestore.Timestamp),
        create_animal: PropTypes.func
    }
    
    constructor(props){
        super(props);
        // console.log(auth.getCurrentUser());
    }
    render(){
        return (
        <div>
            {/* Landing */}
            <ToolBar/>
            <div className="d-flex justify-content-center land-center">
                <div>
                    {/* <p>{auth.getCurrentUser}</p> */}
                    <p id='think'>想不到開心的事嗎？</p>
                    {/* <button onClick={this.props.foo_update}>foo update</button> */}
                    <a href="/other_happy">看看別人因為什麼感到開心...</a>
                    {this.props.status === 'new_egg' ? <CreateAni create_animal={this.props.create_animal}/>: <EggHero/>}
                    <TdRcCount count={this.props.today_recorded}/>
                    <div className="d-flex justify-content-center"><PostModal id={this.props.id}/></div>
                    
                    <ScoreBoard todaysscore={this.props.score.today_score} weeklyscore={this.props.score.week_score} 
                    monthlyscore={this.props.score.month_score} historyscore={this.props.score.history_score}
                    />
                </div>
            </div>
        </div>
        );
    }
}