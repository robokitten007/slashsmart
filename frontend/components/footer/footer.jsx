import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ()=>{
    return (
        <div>
         < section className='footer'>
                <div className='footer-left'>
                    <h1>About Me</h1>
                    <a href="https://github.com/robokitten007/slashsmart" target='_blank'>GitHub</a>
                    <a href="https://www.linkedin.com/in/wliu0709/" target='_blank'>LinkedIn</a>
                    <a href="https://angel.co/u/wen-liu-4" target='_blank'>AngleList</a>

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

