import React from 'react';
import { Button, Modal } from 'rsuite';
// import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types';
import SleepAni from './SleepAni';

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
            <div>
                <Button onClick={this.handleShow}>Kill</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kill or Not</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Let's Killlllllllllll 電電
                        <SleepAni/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}