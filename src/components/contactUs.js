import React, { Component } from 'react';
import $ from 'jquery';

class ContactUs extends Component {
    
    render() {
        return (
            <div id='contact'>

                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-lg-6' style = {{textAlign: 'center'}}>
                            <div>
                                <h2>Contact</h2>
                                <h4><b>Delhi Office</b></h4><br/>

                                Call : +91 9810651005<br/><br/>
                                Email : atulklohiya@gmail.com<br /><br/>
                                # 105, 1st Floor,<br />
                                Virat Bhawan Dr. Mukherjee Nagar,<br />
                                Delhi 110009<br />
                            </div>
                        </div>
                        <div className = 'col-lg-6' style = {{marginTop: 10}}>
                            <iframe
                                style = {{width: '100%', height: 300, borderRadius: 15}}
                                src="https://maps.google.com/maps?q=28.711291%2C%2077.215991&amp;center=28.711291,77.215991&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                class="gmap shadow-lg">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default ContactUs;