import React from 'react';

import { Calendar } from 'rsuite';
import HomeButton from './HomeButton';
import {Button, Modal, ControlLabel, HelpBlock } from 'rsuite';
import PropTypes from 'prop-types';
import './CalendarPage.css';
import {auth,firestore} from '../firebase.js';
import moment from 'moment';


export default class CalendarPage extends React.Component{

    static propTypes = {
        // handleClose : PropTypes.func,
        // handleShow : PropTypes.func
        id : PropTypes.string
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    handleSelect = (date) => {
        // console.log(date);
        this.setState({select_date:date},this.getShowRec);
        
    }

    constructor(props){
        super(props);
        this.state = {
            show:false,
            show_posts:[
                {content:'',score:0},
                {content:'',score:0},
                {content:'',score:0}
            ]
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.getShowRec = this.getShowRec.bind(this);
    }

    getShowRec(){
        // console.log('startend');
        // console.log(moment(this.state.select_date).startOf('day').toDate());
        // console.log(moment(this.state.select_date).endOf('day').toDate());
        console.log(moment());
        let db = firestore();
        let res = [];
        db.collection('post')
        .where('uid','==',this.props.id)
        .where('create_date','>=',firestore.Timestamp.fromDate(moment(this.state.select_date).startOf('day').toDate()))
        .where('create_date','<=',firestore.Timestamp.fromDate(moment(this.state.select_date).endOf('day').toDate()))
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            //   console.log(doc.id, doc.data());
            //   console.log(doc.data());
              res.push(doc.data());
            //   this.setState({});
            });
            for (let i=res.length;i<3;i++){
                res.push({content:'',score:0});
            }
            res.sort(function(a,b){
                let key_a = a.score;
                let key_b = b.score;
                if (key_a < key_b) return 1;
                if (key_a > key_b) return -1;
                return 0;
            });
            this.setState({show_posts:res},
                this.handleShow
            );
          });
        
    }

    render(){
        return (
            <div>
                {/* Calendar */}
                <HomeButton/>                
                    <div className='d-flex justify-content-center calendar'>
                        <Calendar style={{ width: "40rem" }} onChange={this.handleSelect}/>
                    </div>
                <div className='modal_calendar'>
                    <Modal size='xs' show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            {/* <Modal.Title>10/20</Modal.Title> */}
                        </Modal.Header>
                        <Modal.Body>
                            <table className='calendar_table'>
                                <tbody>
                                    <tr>
                                        {/* <td id='td1'>電電過了✧*｡٩(ˊᗜˋ*)و✧*｡</td> */}
                                        <td id='td1'>{this.state.show_posts[0].content}</td>
                                        <td>{this.state.show_posts[0].score ? this.state.show_posts[0].score : ''}</td>
                                    </tr>
                                    <tr>
                                        {/* <td id='td1'>訓練台可以用了(ง๑ •̀_•́)ง</td> */}
                                        {/* <td>10</td> */}
                                        <td id='td1'>{this.state.show_posts[1].content}</td>
                                        <td>{this.state.show_posts[1].score ? this.state.show_posts[1].score : ''}</td>
                                    </tr>
                                    <tr>
                                        {/* <td id='td1'>要放暑假了｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡</td>
                                        <td>7</td> */}
                                        <td id='td1'>{this.state.show_posts[2].content}</td>
                                        <td>{this.state.show_posts[2].score ? this.state.show_posts[2].score : ''}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>                        
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        
        );
    }
}