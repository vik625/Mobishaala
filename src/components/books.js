import React, { Component } from 'react';
import $ from 'jquery';

class Books extends Component {
    
    render() {
        return (
            <div className = 'jumbotron'>

                <div className = 'container'>
                    <h2 style = {{marginTop: -20}}>Our Books</h2>
                    <h4><b>Prabha Publications</b></h4>

                    <div className = 'row'>

                        <img
                            src = 'https://prabhaics.com/assets/b1.jpg'
                            style = {{height: 330, cursor: 'pointer'}}
                            className = 'col-lg-3'
                            onClick = {() => {window.location.href='https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1'}}
                        />

                        <img
                            src = 'https://prabhaics.com/assets/b2.jpg'
                            style = {{height: 330, cursor: 'pointer'}}
                            className = 'col-lg-3'
                            onClick = {() => {window.location.href='https://www.amazon.in/History-Hindi-N-C-R-T-SAR/dp/8192756513/ref=sr_1_2?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-2'}}
                        />

                        <img
                            src = 'https://prabhaics.com/assets/b3.jpg'
                            style = {{height: 330, cursor: 'pointer'}}
                            className = 'col-lg-3'
                            onClick = {() => {window.location.href='https://www.amazon.in/Vastunist-Ncert-Saar-VI-XII-Lohiya/dp/B07VNW515H/ref=sr_1_3?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-3'}}
                        />

                        <img
                            src = 'https://prabhaics.com/assets/b4.jpg'
                            style = {{height: 330, cursor: 'pointer'}}
                            className = 'col-lg-3'
                            onClick = {() => {window.location.href='https://www.amazon.in/Rajvaystha-NCERT-VI-XII-Lohiya-Manoj/dp/819275653X/ref=sr_1_4?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-4'}}
                        />

                    </div>
                    <br/>

                    <span style = {{width : '100%'}} className = 'boxed-btn3-lightBlue-2 shadow-lg'>SEE ALL BOOKS</span>

                </div>

            </div>   
        )
    }
}

export default Books;