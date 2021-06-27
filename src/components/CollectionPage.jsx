import React from 'react';
import './CollectionPage.css';
import HomeButton from './HomeButton';
import {list as countAniFromApi} from '../api/animal.js'
import PropTypes from 'prop-types';

import { Button, Modal } from 'rsuite';

function RenderAniCount(props){
    if(props.clicked_ani === ''){
        return (null);
    }
    else{
    if (props.clicked_ani === 'bear'){
        return(
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='collect-border'>
                        <span><img src='ani_bear.png' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-center collect-number'>
                    數量:<h3>{props.bear_count}</h3>
                </div>
            </div>
        );
    }
    else if (props.clicked_ani === 'cat'){
        return(
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='collect-border'>
                        <span><img src='ani_cat.png' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-center collect-number'>
                    數量:<h3>{props.cat_count}</h3>
                </div>
            </div>
        );
    }
    else if (props.clicked_ani === 'dino'){
        return(
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='collect-border'>
                        <span><img src='ani_dino.png' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-center collect-number'>
                    數量:<h3>{props.dino_count}</h3>
                </div>
            </div>
        );
    }
}
    
}

export default class CollectionPage extends React.Component{
    static propTypes = {
        handleClose : PropTypes.func,
        handleShow : PropTypes.func
    }
    handleClose = () => this.setState({show: false, clicked_ani:''});
    // handleShow = () => this.setState({show: true , clicked_ani:''});
    handleBearClick = () => this.setState({show:true,clicked_ani:'bear'});
    handleCatClick = () => this.setState({show:true,clicked_ani:'cat'});
    handleDinoClick = () => this.setState({show:true,clicked_ani:'dino'});

    constructor(props) {
        super(props);
        this.state = {
            user_id: "69",//不應該寫在這裡，應該是從props傳進來
            dino_count:0,
            cat_count:0,
            bear_count:1,
            clicked_ani:''

        };

        
        this.getBornAniCount = this.getBornAniCount.bind(this);
    }
    componentDidMount() {
        // this.setState(...this.getUser());

        console.log('collection component did mount');
        this.getBornAniCount();
    }

    getBornAniCount(){
        countAniFromApi(this.state.user_id,'cat','born')
        .then(
            (res) => {
                console.log(res.length);
                this.setState({
                    cat_count:res.length
                });
                console.log('getborncat');
            }
        );
        countAniFromApi(this.state.user_id,'dinosaur','born')
        .then(
            (res) => {
                console.log(res.length);
                this.setState({
                    dino_count:res.length
                });
                console.log('getborndino');
            }
        );
        countAniFromApi(this.state.user_id,'dog','born')
        .then(
            (res) => {
                console.log(res.length);
                this.setState({
                    bear_count:res.length
                });
                console.log('getbornbear');
            }
        );
    }
    
    

    render(){
        return (
        <div>
            CollectionPage
            <HomeButton/>
            <div className='blank_collection'></div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex row'>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <span>
                            <img id='ani-1' /*style={this.state.bear_count?{}:{display:'none'}}*/ src='ani_bear.png' onClick={this.handleBearClick}/>
                            <img id='ani-2' /*style={this.state.bear_count?{}:{display:'none'}}*/ src='ani_bear.png' onClick={this.handleBearClick}/>
                        </span>                        
                        <img src='Table-1.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <span>
                            <img id='ani-1' /*style={this.state.dino_count?{}:{display:'none'}}*/ src='ani_dino.png' onClick={this.handleDinoClick}/>
                            <img id='ani-2' /*style={this.state.cat_count?{}:{display:'none'}}*/ src='ani_cat.png' onClick={this.handleCatClick}/>
                        </span> 
                        <img src='Table-2.png'/>
                    </div>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <img src='Table-3.png'/>
                    </div>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <img src='Table-1.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <img src='Table-2.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <img src='Table-3.png'/>
                    </div>
                </div>
                <div>
                        <Modal size='xs' show={this.state.show} onHide={this.handleClose}>
                            {/* <Modal.Header closeButton>
                        <Modal.Title>Kill or Not</Modal.Title>
                    </Modal.Header> */}
                            <Modal.Body>
                                {/* <div className='d-flex justify-content-center'>
                                    <div className='collect-border'>
                                        <span><img src='ani_bear.png'/></span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center collect-number'> */}
                                    
                                        <RenderAniCount {...this.state}/>
                                    
                                {/* </div> */}
                            </Modal.Body>
                        </Modal>
                </div>
            </div>
        </div>
        );
    }
}
