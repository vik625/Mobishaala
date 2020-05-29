import React, { Component } from 'react';
import $ from 'jquery';

class Courses extends Component {
    
    render() {
        return (
            <div>

                <div className = 'container'>
                    <h2 style = {{marginTop: -20}}>Our Courses</h2>

                    <div className = 'row'>

                        <div style={{borderRadius:15, width: 230, margin: 20}} className='card shadow-lg'>
                            <img
                                src = 'https://prabhaics.com/assets/cc1.jpg'
                                style = {{height: 250, cursor: 'pointer', borderRadius: 15}}
                                onClick = {() => {window.location.href='https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1'}}
                            /><br/>

                            <font style = {{fontSize: '20px', paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}>
                                PUB Ad | UPSC UPPCS BPSC
                            </font>
                        </div>

                        <div style={{borderRadius:15, width: 230, margin: 20}} className='card shadow-lg'>
                            <img
                                src = 'https://prabhaics.com/assets/cc2.jpg'
                                style = {{height: 250, cursor: 'pointer', borderRadius: 15}}
                                onClick = {() => {window.location.href='https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1'}}
                            /><br/>

                            <font style = {{fontSize: '20px', paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}>
                                Ethics | UPSC UPPCS
                            </font>
                        </div>

                        <div style={{borderRadius:15, width: 230, margin: 20}} className='card shadow-lg'>
                            <img
                                src = 'https://prabhaics.com/assets/cc3.jpg'
                                style = {{height: 250, cursor: 'pointer', borderRadius: 15}}
                                onClick = {() => {window.location.href='https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1'}}
                            /><br/>

                            <font style = {{fontSize: '20px', paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}>
                                Disaster Management | UPSC UPPCS
                            </font>
                        </div>

                        <div style={{borderRadius:15, width: 230, margin: 20}} className='card shadow-lg'>
                            <img
                                src = 'https://prabhaics.com/assets/cc4.jpg'
                                style = {{height: 250, cursor: 'pointer', borderRadius: 15}}
                                onClick = {() => {window.location.href='https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1'}}
                            /><br/>

                            <font style = {{fontSize: '20px', paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}>
                                Hindi Sahitya | UPPCS BPSC
                            </font>
                        </div>

                        <div style={{borderRadius:15, width: 230, margin: 20}} className='card shadow-lg'>
                            <img
                                src = 'https://prabhaics.com/assets/cc5.jpg'
                                style = {{height: 250, cursor: 'pointer', borderRadius: 15}}
                                onClick = {() => {window.location.href='https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1'}}
                            /><br/>

                            <font style = {{fontSize: '20px', paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}>
                                NCERT | SAAR
                            </font>
                        </div>

                    </div>
                    <br/>
                </div>
            </div>   
        )
    }
}

export default Courses;