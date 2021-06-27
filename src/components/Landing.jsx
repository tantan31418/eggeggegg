import React from 'react';

import ToolBar from '../components/ToolBar.jsx';
import EggHero from '../components/EggHero.jsx';
import CreateAni from '../components/CreateAni.jsx';
import TdRcCount from '../components/TdRcCount.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import PostModal from './PostModal.jsx';
import './Landing.css';

import PropTypes from 'prop-types';



export default class Landing extends React.Component{
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        current_animal: PropTypes.string,//list-animal userid status=egg
        todaysscore:PropTypes.number,
        weeklyscore:PropTypes.number,
        monthlyscore:PropTypes.number,
        historyscore:PropTypes.number,
        dailynote:PropTypes.number,
        today_3_things:PropTypes.array,//task='others'/mypost  userid ts
        cannewanimal:PropTypes.number,
        foo_update:PropTypes.func
        
    
    }
    
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            {/* Landing */}
            <ToolBar/>
            <div className="d-flex justify-content-center land-center">
                <div>
                    <p id='think'>想不到開心的事嗎？</p>
                    {/* <button onClick={this.props.foo_update}>foo update</button> */}
                    <a href="/other_happy">看看別人因為什麼感到開心...</a>
                    {this.props.cannewanimal ? <CreateAni/>: <EggHero/>}
                    <TdRcCount count={this.props.dailynote}/>
                    <div className="d-flex justify-content-center"><PostModal/></div>
                    
                    <ScoreBoard todaysscore={this.props.todaysscore} weeklyscore={this.props.weeklyscore} 
                    monthlyscore={this.props.monthlyscore} historyscore={this.props.historyscore}
                    />
                </div>
            </div>
        </div>
        );
    }
}