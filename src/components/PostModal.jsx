import React from 'react';
// import { Button, Modal ,Form} from 'rsuite';
import {Button,Modal, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Slider, RangeSlider } from 'rsuite';
import PropTypes from 'prop-types';
import './PostModal.css';

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
    }
    

    
    
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    


    render(){
        return (
        <div>
                <Button  className="record_a" onClick={this.handleShow}>
                    記錄一件開心的事吧！
                </Button>

                <Modal  show={this.state.show} onHide={this.handleClose} size="sm">
                    <Modal.Header>
                        <Modal.Title>New User</Modal.Title>
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
                                <ControlLabel>Textarea</ControlLabel>
                                <FormControl
                                    rows={5}
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
                        <Button onClick={this.handleClose} appearance="primary">
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