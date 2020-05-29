import React, { Component } from 'react';

import Navbar from "./navbar.component.js";
import ImageCarousel from './imageCarousel';
import VideoContent from './videoContent';
import Books from './books';
import Courses from './courses';
import JoinClasses from './joinClasses';
import ContactUs from './contactUs';
import Footer from './footer'

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar /><hr/>
                <ImageCarousel />
                <VideoContent /><br />
                <Books />
                <Courses />
                <JoinClasses /><br/>
                <ContactUs /><br/>
                <Footer />
            </div>
        )
    }
}

export default Home;