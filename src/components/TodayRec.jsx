import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeButton from './HomeButton';
import SleepAni from './SleepAni'
import './TodayRec.css';
import {firestore} from '../firebase.js';
import moment from 'moment';



export default class TodayRec extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        current_animal: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            td_3_things:[
                {content:'foo',score:0},
                {content:'foo',score:0},
                {content:'foo',score:0}
            ]
        };
        this.getTdRec = this.getTdRec.bind(this);
    }

    componentDidMount(){
        this.getTdRec();
    }
    //component Will Unmount => manage memory

    getTdRec(){
        let db = firestore();
        let res = [];
        // let query = 
        db.collection('post')
        .where('uid','==',this.props.id)
        .where('create_date','>=',firestore.Timestamp.fromDate(moment().startOf('day').toDate()))
        .orderBy('create_date')
        .orderBy('score','desc')
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
            //   console.log(doc.id, doc.data());
            //   console.log(doc.data());
              res.push(doc.data());
            });
            for (let i=res.length;i<3;i++){
                res.push({content:'今天還沒記錄～快去記錄吧',score:0});
            }
            res.sort(function(a,b){
                let key_a = a.score;
                let key_b = b.score;
                if (key_a < key_b) return 1;
                if (key_a > key_b) return -1;
                return 0;
            });
            this.setState({td_3_things:res});
          });
    }

    render() {
        return (
            <div>
                {/* TodayRec */}
                <HomeButton/>
                <div className='d-flex justify-content-center'>
                    <div className='out-border d-flex justify-content-center align-items-center'>
                    {/* <span className='inner-border'></span> */}
                <div className='carousel'>
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block h-3 item"
                            src="1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h6>First slide label</h6> */}
                            {/* <p>放暑假~</p> */}
                            <p>{this.state.td_3_things[0].content}</p>
                            <p>快樂分數:{this.state.td_3_things[0].score}</p>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block h-3 item"
                            src="2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h6>Second slide label</h6> */}
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            <p>{this.state.td_3_things[1].content}</p>
                            <p>快樂分數:{this.state.td_3_things[1].score}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block h-3 item"
                            src="3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h6>Third slide label</h6> */}
                            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            <p>{this.state.td_3_things[2].content}</p>
                            <p>快樂分數:{this.state.td_3_things[2].score}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                </div>
                </div> {/*out border*/}
                
                </div>
                <div className='d-flex justify-content-center'><SleepAni current_animal={this.props.current_animal}/></div>
            </div>
        );
    }
}