import React, { Component } from 'react';
import $ from 'jquery';

class Courses extends Component {
    
    render() {
        return (
            <div>

                <div className = 'container'>
                    <h2 style = {{marginTop: -20}}>Our Courses</h2>

                    <div className = 'row'>

                        <div className='col-lg-3 col-md-4 col-sm-6 col-6' style={{borderRadius:15, width: 230, marginBottom: 20}}>
                            <img
                                className = 'shadow-lg'
                                src = 'https://prabhaics.com/assets/cc1.jpg'
                                style = {{height: 250, width: "100%", cursor: 'pointer', borderRadius: "15px 15px 0px 0px"}}
                            /><br/>

                            <div className = 'shadow-lg' style = {{textAlign: 'center', height: 120, borderRadius: "0px 0px 15px 15px"}}>
                                <br/>
                                <font style = {{fontSize: '20px', float:'bottom'}}>
                                    PUB Ad | UPSC UPPCS BPSC
                                </font>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 col-6' style={{borderRadius:15, width: 230, marginBottom: 20}}>
                            <img
                                className = 'shadow-lg'
                                src = 'https://prabhaics.com/assets/cc2.jpg'
                                style = {{height: 250, width: "100%", cursor: 'pointer', borderRadius: "15px 15px 0px 0px"}}
                            /><br/>

                            <div className = 'shadow-lg' style = {{textAlign: 'center', height: 120, borderRadius: "0px 0px 15px 15px"}}>
                                <br/>
                                <font style = {{fontSize: '20px', float:'bottom'}}>
                                    Ethics | UPSC UPPCS
                                </font>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-4 col-sm-6 col-6' style={{borderRadius:15, width: 230, marginBottom: 20}}>
                            <img
                                className = 'shadow-lg'
                                src = 'https://prabhaics.com/assets/cc3.jpg'
                                style = {{height: 250, width: "100%", cursor: 'pointer', borderRadius: "15px 15px 0px 0px"}}
                            /><br/>

                            <div className = 'shadow-lg' style = {{textAlign: 'center', height: 120, borderRadius: "0px 0px 15px 15px"}}>
                                <br/>
                                <font style = {{fontSize: '20px', float:'bottom'}}>
                                    Disaster Management | UPSC UPPCS
                                </font>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 col-6' style={{borderRadius:15, width: 230, marginBottom: 20}}>
                            <img
                                className = 'shadow-lg'
                                src = 'https://prabhaics.com/assets/cc4.jpg'
                                style = {{height: 250, width: "100%", cursor: 'pointer', borderRadius: "15px 15px 0px 0px"}}
                            /><br/>

                            <div className = 'shadow-lg' style = {{textAlign: 'center', height: 120, borderRadius: "0px 0px 15px 15px"}}>
                                <br/>
                                <font style = {{fontSize: '20px', float:'bottom'}}>
                                    Hindi Sahitya | UPPCS BPSC
                                </font>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 col-6' style={{borderRadius:15, width: 230, marginBottom: 20}}>
                            <img
                                className = 'shadow-lg'
                                src = 'https://prabhaics.com/assets/cc5.jpg'
                                style = {{height: 250, width: "100%", cursor: 'pointer', borderRadius: "15px 15px 0px 0px"}}
                            /><br/>

                            <div className = 'shadow-lg' style = {{textAlign: 'center', height: 120, borderRadius: "0px 0px 15px 15px"}}>
                                <br/>
                                <font style = {{fontSize: '20px', float:'bottom'}}>
                                    NCERT | SAAR
                                </font>
                            </div>
                        </div>

                    </div>
                    <br/>
                </div>
            </div>   
        )
    }
}

export default Courses;