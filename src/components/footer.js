import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {
    
    render() {
        return (
            <footer class="page-footer theme-background" style = {{color : 'white'}}>
                <div class="container" style = {{padding: 20}}>
                    <div class="row">
                        <div class="col l6 s12">
                            <h4 class="white-text">
                                Prabha Institute of Civil Services
                            </h4> 
                            <p style = {{fontSize : '13px',}} class="grey-text text-lighten-4">
                                Prabha institute of Civil Services was established on 15th
                                August, 2002 for the benefit of the students who want to prepare for Public Administration
                                but find limited options when it comes to Hindi medium. From 2002 till date we have been
                                playing a vital role in bringing the Civil Service aspirants into the mainstream of civil
                                service examination.
                            </p>
                        </div>
                    </div>
                </div> 
                <div class="footer-copyright">
                    <div class="container">
                        <font style = {{fontSize : '12px'}}>© 2019 Prabha Institute of Civil Services powered by Mobishaala</font>
                    </div>
                </div>
                <br/>
            </footer> 
        )
    }
}

export default Footer;