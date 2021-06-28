import React from 'react';
import './CollectionPage.css';
import HomeButton from './HomeButton';
import PropTypes from 'prop-types';

import { Modal } from 'rsuite';

function RenderAniCount(props){
    if(props.clicked_ani === ''){
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='collect-border'>
                        
                    </div>
                </div>
                <div className='d-flex justify-content-center collect-number'>
                    
                </div>
            </div>
        );
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
                    數量:<h3>{props.bear}</h3>
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
                    數量:<h3>{props.cat}</h3>
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
                    數量:<h3>{props.dino}</h3>
                </div>
            </div>
        );
    }
}
    
}

export default class CollectionPage extends React.Component{
    static propTypes = {
        id : PropTypes.string,
        dino : PropTypes.number,
        cat : PropTypes.number,
        bear : PropTypes.number

    }
    handleClose = () => this.setState({show: false, clicked_ani:''});
    // handleShow = () => this.setState({show: true , clicked_ani:''});
    handleBearClick = () => this.setState({show:true,clicked_ani:'bear'});
    handleCatClick = () => this.setState({show:true,clicked_ani:'cat'});
    handleDinoClick = () => this.setState({show:true,clicked_ani:'dino'});

    constructor(props) {
        super(props);
        this.state = {
            // user_id: "69",//不應該寫在這裡，應該是從props傳進來
            // dino_count:0,
            // cat_count:0,
            // bear_count:1,
            clicked_ani:'',
            show:false

        };

        
        // this.getBornAniCount = this.getBornAniCount.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleBearClick = this.handleBearClick.bind(this);
        this.handleCatClick = this.handleCatClick.bind(this);
        this.handleDinoClick = this.handleDinoClick.bind(this);
    }
    componentDidMount() {
        // this.setState(...this.getUser());

        console.log('collection component did mount');
        // this.getBornAniCount();
    }

    
    
    

    render(){
        return (
        <div>
            {/* CollectionPage */}
            <HomeButton/>
            <div className='blank_collection'></div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex row'>
                    <div className='d-flex col-12  col-lg-6 table justify-content-center'>
                        <span>
                            <img id='ani-1' style={this.props.bear?{}:{display:'none'}} src='ani_bear.png' onClick={this.handleBearClick}/>
                            <img id='ani-2' style={this.props.bear?{}:{display:'none'}} src='ani_bear.png' onClick={this.handleBearClick}/>
                        </span>                        
                        <img src='Table-1.png'/>
                    </div>
                    <div className='d-flex col-12 col-lg-6 table justify-content-center'>
                        <span>
                            <img id='ani-1' style={this.props.dino?{}:{display:'none'}} src='ani_dino.png' onClick={this.handleDinoClick}/>
                            <img id='ani-2' style={this.props.cat?{}:{display:'none'}} src='ani_cat.png' onClick={this.handleCatClick}/>
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
                                    
                                        <RenderAniCount {...this.state} {...this.props}/>
                                    
                                {/* </div> */}
                            </Modal.Body>
                        </Modal>
                </div>
            </div>
        </div>
        );
    }
}
