import React from 'react';
import './OtherEgg.css';
import { Button, ControlLabel, Modal } from 'rsuite';
import PropTypes from 'prop-types';


export default class OtherEgg extends React.Component{

    static propTypes = {
        handleClose : PropTypes.func,
        handleShow : PropTypes.func,
        happyText : PropTypes.string
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
        <div className='d-flex col-12 col-md-6 col-lg-4 Egg justify-content-center'>
            <img src={`egghero_backed.png`} onClick={this.handleShow}/>
            <Modal show={this.state.show} onHide={this.handleClose} size='xs'>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.happyText}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.happyText}</p>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        
                        
                    </Modal.Footer>
                </Modal>
        </div>
        );
    }
}