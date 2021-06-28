import React from 'react';
import PropTypes from 'prop-types';
import './TdRcCount.css'


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
            <div className='count d-flex justify-content-center'>
                <p><span
                    style={this.props.count < 3 ? { color: 'red' } : { color: 'green' }}>
                    {this.props.count}</span><span>/3</span></p>
            </div>
        );
    }
}