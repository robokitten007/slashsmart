import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ()=>{
    return (
        <div>
         < section className='footer'>
                <div className='footer-left'>
                    <h1>About Me</h1>
                    <a href="https://github.com/robokitten007">GitHub</a>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                </div>
                <div className='footer-right'>
                    <span>Made with :) in Marlton, NJ, USA</span>
                </div>
         </section>
            <img id='footer' src={window.footer} alt="footer" />
        </div>
    )
}

export default Footer;

