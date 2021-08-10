import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FriendsIndexContainer from '../friends/friends_index_container';
import FriendAddContainer from '../friends/freind_add_container';
import FriendRemoveContainer from '../friends/friend_remove_container';
import FriendBillsContainer from '../bills/friend_bills/friend_bills_container';
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render(){

        return (
         <div className='main-dash-container'>
            
            <div className='main-dash'>

                <div className='left-dash'>
                        <h1>
                            <a href="#/dashboard" className="fas fa-flag">
                                <span className='left-dash-item'>Dashboard</span>
                             </a>
                        </h1> 
                    <div>
                        <h1>
                            <a href="#/dashboard" className='fas fa-money-check'>
                                <span className='left-dash-item'>
                                All expenses
                                </span>
                            </a>
                        </h1>
                    </div>

                    <div className='friends-index-container'>
                        <div className='friend-index-header'>
                            <h2>FRIENDS</h2>
                        </div>
                        <FriendsIndexContainer />
                        <FriendAddContainer />
                        <div className='personal-links'>
                            <a href="https://github.com/robokitten007/slashsmart" target="_blank" className='fab fa-github fa-2x'></a>
                            <a href="https://www.linkedin.com/in/wliu0709/" target="_blank" className='fab fa-linkedin fa-2x'></a>
                            <a href="https://angel.co/u/wen-liu-4" target='-blank' className='fab fa-angellist fa-2x'></a>
            
                        </div>
                   
                    </div>
                 
                </div>
                <div className='content-container'>
                    <div className='mid-dash'>
                        {/* <h1>this is the mid-dash</h1> */}

                        <Switch>
                            <Route exact path='/dashboard/:userId' component={FriendBillsContainer} />
                        </Switch>
                        {/* <FriendBillsContainer/> */}
                    </div>

                    <div className='right-dash'>
                            <Switch>
                            <Route exact path='/dashboard/:userId' component={FriendRemoveContainer} />
                        </Switch>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default Dashboard