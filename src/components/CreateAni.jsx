import React from 'react';
import { Button, Modal } from 'rsuite';
import PropTypes from 'prop-types';
import './CreatAni.css';

// import './CreateAni.css';

export default class CreateAni extends React.Component{
    static propTypes = {
        // handleClose : PropTypes.func,
        // handleShow : PropTypes.func,
        create_animal:PropTypes.func

    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    handleCreateDino = () => {
        this.props.create_animal('dino');
        this.handleClose();
        
    }
    handleCreateCat = () => {
        this.props.create_animal('cat');
        this.handleClose();
        
    }
    handleCreateBear = () => {
        this.props.create_animal('bear');
        this.handleClose();
        
    }

    constructor(props){
        super(props);
        this.state = {
            show:false
        };
        this.handleCreateDino = this.handleCreateDino.bind(this);
        this.handleCreateCat = this.handleCreateCat.bind(this);
        this.handleCreateBear = this.handleCreateBear.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    render(){
        return (
        <div>
            <img src='box.png' onClick={this.handleShow} style={{marginTop:60, marginBottom:10, marginLeft:40}}/>
                <Modal size='md' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose an Animal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-between flex-row blackani'>
                            <table id='create_table'>
                            <tbody>
                                <tr>
                                    <td><img id='black_bear' src='black_bear.png' onClick={this.handleCreateBear}/></td>
                                    <td><img id='black_dino' src='black_dino.png' onClick={this.handleCreateDino}/></td>
                                    <td><img id='black_cat'  src='black_cat.png'  onClick={this.handleCreateCat}/></td>
                                </tr>
                                <tr>
                                    <td>31 Days</td>
                                    <td>10 Days</td>
                                    <td>14 Days</td>
                                </tr>                            
                            </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
        </div>
        );
    }
}