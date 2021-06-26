import React from 'react';
import './ScoreBoard.css';

import PropTypes from 'prop-types';


export default class ScoreBoard extends React.Component{
    static propTypes = {
        score :PropTypes.object
    
    }
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <div>
            <div className="d-flex justify-content-center scoreboard">
                <p>今天累積的快樂分數<span>{this.props.score.today_score}</span></p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>本週累積的快樂分數<span>{this.props.score.week_score}</span></p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>本月累積的快樂分數<span>{this.props.score.month_score}</span></p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>有史以來累積的快樂分數<span>{this.props.score.history_score}</span></p>
            </div>
        </div>
        );
    }
}