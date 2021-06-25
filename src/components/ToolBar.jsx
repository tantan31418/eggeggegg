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
                <ToolBarButton buttonType="Settings"/>
                <ToolBarButton buttonType="Collection"/>
                <ToolBarButton buttonType="RIP"/>
                <ToolBarButton buttonType="Calendar"/>
                <KillButton/>
            </div>
        
        );
    }
}