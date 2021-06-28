import React from 'react';
import {Button, Modal, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Slider } from 'rsuite';
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
        id: PropTypes.string,
        today_recorded : PropTypes.number,
        updateUser : PropTypes.func,
        cur_ani_create_date:PropTypes.instanceOf(firestore.Timestamp),
        user_status:PropTypes.string,
        current_animal:PropTypes.string,
        collection:PropTypes.object,
        current_animal_id:PropTypes.string,
        score:PropTypes.object
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
        this.checkBreedStatus = this.checkBreedStatus.bind(this);
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
        }, { merge: true })
        .then(
            () => {
                let new_score = this.props.score;
                new_score.today_score += this.state.formValue.happiness;
                new_score.month_score += this.state.formValue.happiness;
                new_score.week_score += this.state.formValue.happiness;
                new_score.history_score += this.state.formValue.happiness;
                db.collection('user').doc(this.props.id).set({
                    today_recorded: this.props.today_recorded + 1,
                    score: new_score
                },{merge:true}).then(
                    ()=>{
                        // this.props.updateUser();
                        this.checkBreedStatus();
                        // this.handleClose();
                    }
                    
                    )
            }
        );
    }

    checkBreedStatus = () => {
        console.log('call check breed status');
        let db = firestore();
        const dino_breed_time = 0;
        const cat_breed_time = 0;
        const bear_breed_time = 0;
        let breed_time = (
            (this.props.current_animal === 'dino') ? dino_breed_time :
                (this.props.current_animal === 'cat') ? cat_breed_time :
                    (this.props.current_animal === 'bear') ? bear_breed_time : null
        );
        if (this.props.today_recorded >= 2 && this.props.user_status === 'breed'){
            // let start_date = moment(firestore.Timestamp.toDate(this.props.cur_ani_create_date));\
            let start_date = moment(this.props.cur_ani_create_date.toDate()).startOf('day');
            let now_date = moment().startOf('day');
            let dura_days = now_date.diff(start_date,'days');
            console.log(dura_days);
            if (dura_days >= breed_time){
                // breed success
                console.log('breed success');
                // update backend
                let new_collection = this.props.collection;
                switch (this.props.current_animal) {
                    case 'dino':
                        new_collection.dino += 1;
                        break;
                    case 'cat':
                        new_collection.cat += 1;
                        break;
                    case 'bear':
                        new_collection.bear += 1;
                        break;
                    default:
                        break;
                }
                
                db.collection('user').doc(this.props.id).set({
                    status: 'born',
                    collection : new_collection
                },{merge : true}).then(
                    db.collection('animal').doc(this.props.current_animal_id).set({
                        animal_status: 'born'
                    },{ merge : true}).then(
                        //update frontend, close
                        () => {
                            this.props.updateUser();
                            this.handleClose();
                        }
                        
                    )
                )
            }
            else {
                console.log('not yet');
                this.props.updateUser();
                this.handleClose();
            }
        }
        else {
            console.log('dead or already born');
            this.props.updateUser();
            this.handleClose();
        }
    }
    


    render(){
        return (
        <div>
                <div className='blank-top'></div>
                {this.props.user_status === 'breed' ?
                    <Button className="record_a" onClick={this.handleShow}>
                        <div>記錄一件開心的事吧！</div>
                    </Button>
                    :
                    <h3>明天再來記錄吧！</h3>}

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