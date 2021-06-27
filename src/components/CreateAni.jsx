import React from 'react';
import { Button, Modal } from 'rsuite';
import PropTypes from 'prop-types';
import './CreatAni.css';

// import './CreateAni.css';

export default class CreateAni extends React.Component{
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
            <img src='box.png' onClick={this.handleShow}/>
                <Modal size='md' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose an Animal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-between flex-row blackani'>
                            <table id='create_table'>
                            <tbody>
                                <tr>
                                    <td><img id='black_bear' src='black_bear.png' /></td>
                                    <td><img id='black_dino' src='black_dino.png' /></td>
                                    <td><img id='black_cat'  src='black_cat.png'  /></td>
                                </tr>
                                <tr>
                                    <td>31 Days</td>
                                    <td>10 Days</td>
                                    <td>14 Days</td>
                                </tr>                            
                            </tbody>
                            </table>
                        </div>
                        
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
                        {/* <div className="d-flex justify-content-center choose">
                            <img src='cancel.png' variant="secondary" onClick={this.handleClose} />
                            <img id='hammer' src='hammer.png' variant="primary" onClick={this.handleClose} />
                        </div> */}
                    </Modal.Footer>
                </Modal>
        </div>
        );
    }
}