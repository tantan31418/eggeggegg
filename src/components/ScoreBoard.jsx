import React from 'react';
import './ScoreBoard.css';

import PropTypes from 'prop-types';


export default class ScoreBoard extends React.Component{
    static propTypes = {
        todaysscore:PropTypes.number,
        weeklyscore:PropTypes.number,
        monthlyscore:PropTypes.number,
        historyscore:PropTypes.number
    
    }
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <div>
            <div className="d-flex justify-content-center scoreboard">
                <p>今天累積的快樂分數&nbsp;<span>{this.props.todaysscore}</span></p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>本週累積的快樂分數&nbsp;<span>{this.props.weeklyscore}</span></p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>本月累積的快樂分數&nbsp;<span>{this.props.monthlyscore}</span></p>
            </div>
            <div className="d-flex justify-content-center scoreboard" style={{marginBottom:50}}>
                <p>有史以來累積的快樂分數&nbsp;<span>{this.props.historyscore}</span></p>
            </div>
        </div>
        );
    }
}