import React, { Component } from 'react';
import $ from 'jquery';

class ImageCarousel extends Component {

    activePart = 0;
    nextNews(i) {
        var j = i;
        if(i == 3) {
            j = 0;
        }
        $('#part'+i).fadeOut();
        $('#part'+i).hide();
        $('#part'+(j+1)).fadeIn();
        this.activePart = (i%3)+1;
        if(this.activePart == 0) {
            this.activePart++;
        } else if(this.activePart == 4) {
            this.activePart--;
        }
    }

    previousNews(i) {
        var j = i;
        if(i == 1) {
            j = 4;
        }
        $('#part'+i).fadeOut();
        $('#part'+i).hide();
        $('#part'+(j-1)).fadeIn();
        this.activePart = j-1;
        if(this.activePart == 0) {
            this.activePart++;
        } else if(this.activePart == 4) {
            this.activePart--;
        }
    }

    j = 1;
    newSlider = null;
    startNewsSlider() {
        this.newSlider = setInterval(() => {
            this.nextNews(this.activePart);
            if(this.activePart > 3) {
                this.activePart = 1;
            }
        }, 3000)
    }

    render() {
        return (
          <div id='videoContent' style = {{paddingTop: 30}}>
                <div id = 'part1' className = 'row'>
                    <div className = 'col-lg-6' style = {{paddingLeft: 200, paddingTop: 30}}>
                        <h3>Pub. Ad. Strategy</h3>
                        <h6><b>BPSC Mains</b></h6>
                        <font style = {{fontSize:'15px', color:'#525252'}}>
                            Atul Lohiya Sir's Lecture on Pub. Ad. Strategy for BPSC 65 Mains
                        </font><br/><br/>

                        <span className = 'boxed-btn3-lightBlue-2 shadow-lg'>Join Classes</span>
                    </div>

                    <div className = 'col-lg-6'>
                        <iframe
                            className='shadow-lg'
                            style={{borderRadius:15}}
                            width="549" 
                            height="309" 
                            src="https://www.youtube.com/embed/xKwRrPbReMw" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                
                    <div style = {{marginLeft: 'auto', marginRight: 'auto'}}>
                        <span className = "dot activeDot"></span>
                        <span className = "dot"></span>
                        <span className = "dot"></span>
                    </div>

                </div>

                <div id = 'part2' className = 'row' style = {{display:'none'}}>
                    <div className = 'col-lg-6' style = {{paddingLeft : 200, paddingTop: 30}}>
                        <h3>Mugal Kaleen Administration</h3>
                        <h6><b>UPSC 2020</b></h6>
                        <font style = {{fontSize:'15px', color:'#525252'}}>
                            Atul Lohiya Sir's Lecture on Mugal Kaleen Administration for UPSC 2020
                        </font><br/><br/>

                        <span className = 'boxed-btn3-lightBlue-2 shadow-lg'>Join Classes</span>
                    </div>

                    <div className = 'col-lg-6'>
                        <iframe
                            className='shadow-lg'
                            style={{borderRadius:15}}
                            width="549" 
                            height="309" 
                            src="https://www.youtube.com/embed/TOlnpKopaDo" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div style = {{marginLeft: 'auto', marginRight: 'auto'}}>
                        <span className = "dot"></span>
                        <span className = "dot activeDot"></span>
                        <span className = "dot"></span>
                    </div>
                </div>
          
                <div id = 'part3' className = 'row' style = {{display:'none'}}>
                    <div className = 'col-lg-6' style = {{paddingLeft : 200, paddingTop: 30}}>
                        <h3>Mitigation - Disaster Management </h3>
                        <h6><b>UPSC 2020</b></h6>
                        <font style = {{fontSize:'15px', color:'#525252'}}>
                            Akashi Lohiya Madam's Lecture on Mitigation - Disaster Management for UPSC 2020
                        </font><br/><br/>

                        <span className = 'boxed-btn3-lightBlue-2 shadow-lg'>Join Classes</span>
                    </div>

                    <div className = 'col-lg-6'>
                        <iframe
                            className='shadow-lg'
                            style={{borderRadius:15}}
                            width="549" 
                            height="309" 
                            src="https://www.youtube.com/embed/2WhIONVlSgs" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div style = {{marginLeft: 'auto', marginRight: 'auto'}}>
                        <span className = "dot"></span>
                        <span className = "dot"></span>
                        <span className = "dot activeDot"></span>
                    </div>
                </div>
            
                {this.startNewsSlider()}

          </div>
        )
    }
}

export default ImageCarousel;