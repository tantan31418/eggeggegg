import React from 'react';
import { Button, Modal } from 'rsuite';
// import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types';
import SleepAni from './SleepAni';
import './KillButton.css';

export default class KillButton extends React.Component{
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
            <div className='hammer'>
                {/* <Button onClick={this.handleShow}>Kill</Button> */}
                <img src='hammer.png' onClick={this.handleShow}/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Kill or Not</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <div class="d-flex text"><p>要放棄這顆蛋嗎...</p></div>
                        <div class="d-flex justify-content-center sleepani"><SleepAni/></div>
                        {/* <div class="d-flex justify-content-between">
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
                        <div class="d-flex justify-content-center choose">
                            <img src='cancel.png' variant="secondary" onClick={this.handleClose}/>
                            <img id='hammer' src='hammer.png' variant="primary" onClick={this.handleClose}/>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}