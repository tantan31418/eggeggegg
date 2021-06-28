import React from 'react';
// import { Button, Modal ,Form} from 'rsuite';
import {Button, Modal, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Slider, RangeSlider } from 'rsuite';
import PropTypes from 'prop-types';
import './PostModal.css';
import {firestore} from '../firebase.js';
import moment from 'moment';

class CustomField extends React.PureComponent {
    render() {
      const { name, message, label, accepter, error, ...props } = this.props;
      return (
        <FormGroup className={error ? 'has-error' : ''}>
          <ControlLabel>{label} </ControlLabel>
          <FormControl
            name={name}
            accepter={accepter}
            errorMessage={error}
            {...props}
          />
          <HelpBlock>{message}</HelpBlock>
        </FormGroup>
      );
    }
  }


export default class PostModal extends React.Component{

    static propTypes = {
        // handleClose : PropTypes.func,
        // handleShow : PropTypes.func
        id: PropTypes.string
    }
    
    constructor(props){
        super(props);
        this.state = {
            formValue: {
                textarea: '',
                happiness: 5
              },
            show:false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // db = firestore();
    }
    

    

    handleClose = () => this.setState({
        formValue: {
            textarea: '',
            happiness: 5
        }, show: false
    });
    handleShow = () => this.setState({show: true});

    handleSubmit = () => {
        let db = firestore();
        db.collection("post").add({
            content:this.state.formValue.textarea,
            score:this.state.formValue.happiness,
            uid:this.props.id,
            create_date:firestore.FieldValue.serverTimestamp() 
        }, { merge: true }).then(this.handleClose());
    }
    


    render(){
        return (
        <div>
                <div className='blank-top'></div>
                <Button className="record_a" onClick={this.handleShow}>
                    <div>記錄一件開心的事吧！</div>
                </Button>
                <div className='blank-down'></div>

                <Modal  show={this.state.show} onHide={this.handleClose} size="sm">
                    <Modal.Header>
                        <Modal.Title>New Happy</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            fluid
                            onChange={formValue => {
                                console.log(formValue);
                                this.setState({ formValue });
                              }}
                            formValue={this.state.formValue}
                        >
                            
                            <FormGroup>
                                {/* <ControlLabel>Textarea</ControlLabel> */}
                                <FormControl
                                    rows={10}
                                    name="textarea"
                                    componentClass="textarea"
                                    placeholder="hello"
                                />
                            </FormGroup>
                            <div>
                            
                            
                            <CustomField
                                accepter={Slider}
                                defaultValue={5}
                                name="happiness"
                                min={1}
                                step={1}
                                max={10}
                                style={{width:500,before:100,margin:20}}

                                graduated
                                renderMark={mark => {
                                    return mark;
                                }}
                            />
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmit} appearance="primary">
                            Confirm
                        </Button>
                        <Button onClick={this.handleClose} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
        );
    }
}