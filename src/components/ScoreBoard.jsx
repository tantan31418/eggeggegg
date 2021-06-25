import React from 'react';

export default class ScoreBoard extends React.Component{
    render(){
        return (
        <div>
            <h4>今天累積的快樂分數</h4>
            <h4>本週累積的快樂分數</h4>
            <h4>本月累積的快樂分數</h4>
            <h4>有史以來累積的快樂分數</h4>
        </div>
        );
    }
}