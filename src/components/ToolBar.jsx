import React from 'react';
import PropTypes from 'prop-types';
import ToolBarButton from './ToolBarButton';
import KillButton from '../components/KillButton.jsx';
import './ToolBar.css';



export default class ToolBar extends React.Component{
    static propTypes = {
        // buttonType : PropTypes.string
    }
    
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='toolbar'>
                <div className="d-flex justify-content-between">
                <ToolBarButton buttonType="Settings"/>
                <KillButton/>
                </div>
                <ToolBarButton buttonType="Collection"/>
                <ToolBarButton buttonType="RIP"/>
                <ToolBarButton buttonType="Calendar"/>
                
            </div>
        
        );
    }
}