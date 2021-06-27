import React from 'react';
import OtherEggs from './OtherEggs';
import HomeButton from './HomeButton';
import PropTypes from 'prop-types';


export default class OtherHappy extends React.Component{

    static propTypes = {
        id: PropTypes.number
    }

    

    constructor(props){
        super(props);
        
    }
    render(){
        return (
        <div>
            {/* OtherHappy */}
            <HomeButton/>
            <OtherEggs {...this.props}/>
        </div>
        );
    }
}