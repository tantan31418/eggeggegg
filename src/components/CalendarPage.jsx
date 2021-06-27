import React from 'react';

import { Calendar } from 'rsuite';
import HomeButton from './HomeButton';
import {Button, Modal, ControlLabel, HelpBlock } from 'rsuite';
import PropTypes from 'prop-types';
import './CalendarPage.css';


export default class CalendarPage extends React.Component{

    static propTypes = {
        handleClose : PropTypes.func,
        handleShow : PropTypes.func
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    constructor(props){
        super(props);
        this.state = {
            show:false
        };
    }

    render(){
        return (
            <div>
                {/* Calendar */}
                <HomeButton/>                
                    <div className='d-flex justify-content-center calendar'>
                        <Calendar style={{ width: "40rem" }} onChange={this.handleShow}/>
                    </div>
                <div className='modal_calendar'>
                    <Modal size='xs' show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            {/* <Modal.Title>10/20</Modal.Title> */}
                        </Modal.Header>
                        <Modal.Body>
                            <table className='calendar_table'>
                                <tbody>
                                    <tr>
                                        <td id='td1'>電電過了✧*｡٩(ˊᗜˋ*)و✧*｡</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td id='td1'>訓練台可以用了(ง๑ •̀_•́)ง</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td id='td1'>要放暑假了｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡</td>
                                        <td>7</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>                        
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        
        );
    }
}