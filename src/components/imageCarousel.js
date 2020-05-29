import React, { Component } from 'react';
//mport $ from 'jquery';

class ImageCarousel extends Component {
    prev() {
        document.getElementById('slider-container').scrollLeft -= 600;
    }

    next() {
        document.getElementById('slider-container').scrollLeft += 600;
    }

    imgSlider = null;
    i = 0;
    startImageSlider() {
        this.i = 0;
        this.imgSlider = setInterval(() => {
                this.next();
                if(this.i > 3) {
                    document.getElementById('slider-container').scrollLeft -= 8010
                    this.i = 0;
                }
                this.i++;
        }, 3000);
       
    }

    render() {
        return (
            <div id="imageSlider">
                <div className="row">
                    <div id="slider-container" style={{height: 350}} className="slider">
                        <div className="slide">
                            <img className = 'shadow-lg' src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559640610634.jpg" alt=""/>
                        </div>
                        <div className="slide">
                            <img className = 'shadow-lg' src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559647354580.jpg" alt=""/>
                        </div>
                        <div className="slide">
                            <img className = 'shadow-lg' src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1567695708811.jpg" alt=""/>
                        </div>
                        <div className="slide">
                            <img className = 'shadow-lg' src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559640610634.jpg" alt=""/>
                        </div>
                    </div>
        
                    <div className="overlay"></div>
                </div>
                {this.startImageSlider()}
                
            </div>
            
        )
    }
}

export default ImageCarousel;