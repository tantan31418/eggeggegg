import React from 'react';
import PropTypes from 'prop-types';
import ToolBarButton from './ToolBarButton';
import KillButton from '../components/KillButton.jsx';
import './ToolBar.css';



export default class ToolBar extends React.Component{
    static propTypes = {
        id: PropTypes.string,
        user_status:PropTypes.string,
        current_animal_id:PropTypes.string,
        current_animal:PropTypes.string,
        rip : PropTypes.object,
        updateUser : PropTypes.func
    }
    
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className='toolbar'>
                <div className="d-flex justify-content-between">
                    <ToolBarButton buttonType="Settings" />
                    <KillButton id={this.props.id}
                        updateUser={this.props.updateUser}
                        user_status={this.props.user_status}
                        current_animal={this.props.current_animal}
                        rip={this.props.rip}
                        current_animal_id={this.props.current_animal_id} />
                </div>
                <ToolBarButton buttonType="Collection" />
                <ToolBarButton buttonType="RIP" />
                <ToolBarButton buttonType="Calendar" />

            </div>

        );
    }
}