import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className = 'container' style = {{marginTop: 10}}>
                <img style = {{width: 60, height: 60, float:'left', marginTop: '-10px'}} src='https://prabhaics.com/assets/logo.png'/>
                <font style = {{fontSize:'15px', marginLeft:20}}>Prabha Institute of Civil Services</font>

                <div id='floatRightButtons' style = {{float: 'right'}}>
                    <a style = {{marginRight: 30, color : '#2980b9', cursor: 'pointer'}} href='#contact'>Contact</a>
                    <a style = {{marginLeft: 30}} className = 'boxed-btn3-lightBlue-2 shadow-lg' href='#joinClasses'>Join Classes</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;