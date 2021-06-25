import React from 'react';

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
            <h4>今天累積的快樂分數<span>{this.props.score.today_score}</span></h4>
            <h4>本週累積的快樂分數<span>{this.props.score.week_score}</span></h4>
            <h4>本月累積的快樂分數<span>{this.props.score.month_score}</span></h4>
            <h4>有史以來累積的快樂分數<span>{this.props.score.history_score}</span></h4>
        </div>
        );
    }
}