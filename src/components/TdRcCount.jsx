import React from 'react';
import PropTypes from 'prop-types';


// Today Record Count -- 0/3 -> 3/3
export default class TdRcCount extends React.Component{
    static propTypes = {
        count : PropTypes.number
    }
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <div>
            <p><span>{this.props.count}</span><span>/3</span></p>
        </div>
        );
    }
}