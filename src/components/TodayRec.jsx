import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeButton from './HomeButton';



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
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block h-50"
                            src="https://b.ecimg.tw/items/DNAA2WA900B4W4K/000001_1612331911.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-50"
                            src="https://b.ecimg.tw/items/DNAA2WA900B4W4K/000001_1612331911.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-50"
                            src="https://b.ecimg.tw/items/DNAA2WA900B4W4K/000001_1612331911.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}