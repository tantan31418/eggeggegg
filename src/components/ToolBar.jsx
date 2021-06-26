import React from 'react';
import PropTypes from 'prop-types';
import ToolBarButton from './ToolBarButton';
import KillButton from '../components/KillButton.jsx';



export default class ToolBar extends React.Component{
    static propTypes = {
        // buttonType : PropTypes.string
    }
    
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <ToolBarButton buttonType="settings"/>
                <ToolBarButton buttonType="collection"/>
                <ToolBarButton buttonType="rip"/>
                <ToolBarButton buttonType="calendar"/>
                <KillButton/>
            </div>
        
        );
    }
}