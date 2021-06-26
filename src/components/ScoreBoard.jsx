import React from 'react';
import './ScoreBoard.css';

export default class ScoreBoard extends React.Component{
    render(){
        return (
        <div>
            <div className="d-flex justify-content-center scoreboard">
                <p>今天累積的快樂分數</p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>本週累積的快樂分數</p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>本月累積的快樂分數</p>
            </div>
            <div className="d-flex justify-content-center scoreboard">
                <p>有史以來累積的快樂分數</p>
            </div>
        </div>
        );
    }
}