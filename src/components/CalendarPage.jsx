import React from 'react';

import { Calendar } from 'rsuite';
import HomeButton from './HomeButton';
import {Button, Modal, ControlLabel, HelpBlock } from 'rsuite';
import PropTypes from 'prop-types';


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
                Calendar
                <HomeButton/>
                <div className='d-flex justify-content-center'>
                    <Calendar onChange={this.handleShow}/>
                </div>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        {/* <Modal.Header closeButton>
                <Modal.Title>Kill or Not</Modal.Title>
            </Modal.Header> */}
                        <Modal.Body>
                            {/* <div className="d-flex text"><p>要放棄這顆蛋嗎...</p></div> */}
                            {/* <div className="d-flex justify-content-center sleepani"><SleepAni/></div> */}
                            {/* <div className="d-flex justify-content-between">
                    <img src='cancel.png'/>
                    <img src='hammer.png'/>
                </div> */}
                        </Modal.Body>
                        <Modal.Footer>
                            {/* <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                    Save Changes
                </Button> */}
                            
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        
        );
    }
}