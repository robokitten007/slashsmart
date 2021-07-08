import React from 'react';
import {Link} from 'react-router-dom';  


const Splash = () => {
    return (
    <div className='body-container'>

        <section className='transition'> 
            <div className='left-1'>
                <p>Less stress when sharing expenses <span>on trips.</span>
                </p>

                <img className='transit-icon' src={window.ariplane_icon} alt="travel" />
    
                <h2>
                    keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                </h2>
               {/* <Link className='signup' onClick={()=>props.history.push('/signup')}>Sign up</Link> */}
                <Link className='signup' to='/signup'>Sign up</Link>
            </div>
            <div className='right-1'>
                 <img  src={window.ariplane_icon} alt="travel" />    
            </div>
        </section>

        <section className='features'>
            <div className='left-2'>
                <div className='left-detail'>
                    <h1>
                        Track balance
                    </h1>

                    <h2>Keep track of shared expenses, balances, and who owns who.</h2>
                </div>
                     <img className='feature-img' src={window.track_balances} alt="track" />
                
            </div>
             <div className='right-2'>
                 <div className='right-detail'>
                 <h1>
                     Organize expenses
                 </h1>
                <h2>Split expenses with any people: trips, housemates, friends and family</h2>
                </div>
                 <img className='feature-img' src={window.organize_expense} alt="organize" />
                 
             </div>
        </section>


        <section className='footer'>
            footer here
        </section>

    </div>
    )
}

export default Splash;