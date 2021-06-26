import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeButton from './HomeButton';
import SleepAni from './SleepAni'
import './TodayRec.css';

export default class TodayRec extends React.Component {
    static propTypes = {

    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                TodayRec
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
                            <p>放暑假~</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                </div>
                </div> {/*out border*/}
                
                </div>
                <div className='d-flex justify-content-center'><SleepAni/></div>
            </div>
        );
    }
}