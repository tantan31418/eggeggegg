import React from 'react';
import { Modal } from 'rsuite';
import PropTypes from 'prop-types';
import SleepAni from './SleepAni';
import './KillButton.css';
import {firestore} from '../firebase.js';


export default class KillButton extends React.Component{
    static propTypes = {
        id: PropTypes.string,
        user_status:PropTypes.string,
        current_animal_id:PropTypes.string,
        current_animal:PropTypes.string,
        rip : PropTypes.object,
        updateUser : PropTypes.func
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    constructor(props){
        super(props);
        this.state = {
            show:false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleKill = this.handleKill.bind(this);
    }

    handleKill = () => {
        if (this.props.user_status === 'breed') {
            console.log('start killing');
            let db = firestore();
            db.collection('animal').doc(this.props.current_animal_id).set({
                animal_status: 'dead'
            },{ merge : true}).then(
                () =>{
                    let new_rip = this.props.rip;
                    switch (this.props.current_animal) {
                        case 'dino':
                            new_rip.dino += 1;
                            break;
                        case 'cat':
                            new_rip.cat += 1;
                            break;
                        case 'bear':
                            new_rip.bear += 1;
                            break;
                        default:
                        break;
                }
                    db.collection('user').doc(this.props.id).set({
                        status: 'dead',
                        rip : new_rip
                    },{ merge : true}).then(
                        () => {
                            this.props.updateUser();
                            this.handleClose();
                        }
                    );
                }
            );
        }
        else {
            console.log('new_egg/born/dead, cannot kill');
            this.handleClose();
        }
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
                        <div className="d-flex text"><p>要放棄這顆蛋嗎...</p></div>
                        <div className="d-flex justify-content-center sleepani"><SleepAni/></div>
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
                        <div className="d-flex justify-content-center choose">
                            <img src='cancel.png' variant="secondary" onClick={this.handleClose}/>
                            <img id='hammer' src='hammer.png' variant="primary" onClick={this.handleKill}/>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}