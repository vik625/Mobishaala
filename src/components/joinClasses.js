import React, { Component } from 'react';
import $ from 'jquery';

class JoinClasses extends Component {
    
    render() {
        return (
            <div id='joinClasses' className = 'jumbotron'>

                <div className = 'container row' style = {{}}>
                    <div className = 'col-lg-6 col-md-6 col-sm-12 col-12' style = {{textAlign: 'center'}}>
                            <h2>Join Classes</h2>
                            <h4><b>Download <font style = {{color:'#2980b9'}}>Mobishaala</font> App</b></h4><br/>
                            <h4><b>Use Institute code <font style = {{color:'#2980b9'}}>PICS1005</font></b></h4><br/>
                            <img style = {{width: 170, height: 50, marginBottom: 20}} src='https://prabhaics.com/assets/playstore.png'/>
                            <img style = {{width: 170, height: 50, marginLeft: 10, marginBottom: 20}} src='https://prabhaics.com/assets/appstore.svg'/>
                    </div>
                    <div className = 'col-lg-6 col-md-6 col-sm-12 col-12' style = {{textAlign: 'center'}}>
                        <img src="https://i.ibb.co/5xZwtHD/phone.png" alt="phone" border="0"/>
                    </div>
                </div>
            </div>   
        )
    }
}

export default JoinClasses;