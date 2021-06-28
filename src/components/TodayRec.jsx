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
        current_animal: PropTypes.string,
        user_status:PropTypes.string,
        cur_ani_create_date:PropTypes.instanceOf(firestore.Timestamp)
    }

    constructor(props) {
        super(props);
        this.state = {
            td_3_things:[
                {content:'',score:0},
                {content:'',score:0},
                {content:'',score:0}
            ],
            days_until_born:null
        };
        this.getTdRec = this.getTdRec.bind(this);
        this.getDaysUntilBorn = this.getDaysUntilBorn.bind(this);
    }

    componentDidMount(){
        this.getTdRec();
        this.getDaysUntilBorn();
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

    getDaysUntilBorn(){
        const dino_breed_time = 0;
        const cat_breed_time = 0;
        const bear_breed_time = 0;
        let breed_time = (
            (this.props.current_animal === 'dino') ? dino_breed_time :
                (this.props.current_animal === 'cat') ? cat_breed_time :
                    (this.props.current_animal === 'bear') ? bear_breed_time : null
        );
        let start_date = moment(this.props.cur_ani_create_date.toDate()).startOf('day');
        let now_date = moment().startOf('day');
        let dura_days = now_date.diff(start_date, 'days');
        this.setState({days_until_born:breed_time-dura_days});
    }

    render() {
        return (
            <div>
                {/* TodayRec */}
                <HomeButton />
                {/* {this.props.current_animal === 'cat' ? <div className='d-flex justify-content-center'><SleepAni current_animal={this.props.current_animal} /></div> : null} */}
                <div className='d-flex justify-content-center'>
                    <div className='out-border d-flex justify-content-center align-items-center'>
                        {/* <span className='inner-border'></span> */}
                        <div className='carousel'>
                            <Carousel>
                                <Carousel.Item interval={10000}>
                                    <img
                                        className="d-block h-3 item"
                                        src="1.png"
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
                                        src="2.png"
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
                                        src="3.png"
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
                {/*this.props.current_animal === 'cat' ? null :*/ <div className='d-flex justify-content-center'><SleepAni current_animal={this.props.current_animal} /></div>}
                <div className='d-flex justify-content-center'>
                    {this.props.user_status === 'breed' ? <p>距離孵化還有&nbsp;<span>{this.state.days_until_born}</span>天</p>
                        :  this.props.user_status === 'born' ? <p>已經孵化成功～</p>
                        :  this.props.user_status === 'dead' ? <p>您敲碎了這顆蛋QQ</p>
                        : null
                    }
                </div>
            </div>
        );
    }
}