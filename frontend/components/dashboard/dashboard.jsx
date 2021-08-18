import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FriendsIndexContainer from '../friends/friends_index_container';
import FriendAddContainer from '../friends/freind_add_container';
import FriendRemoveContainer from '../friends/friend_remove_container';
import FriendBillsContainer from '../bills/friend_bills/friend_bills_container';
import FriendBalanceContainer from '../balance/friend_balance/friend_balance_container';
import AllExpensesContainer from '../expenses/all_expenses_container';
import AllbalanceContainer from '../balance/all_balance/all_balance_container'
import { Link } from 'react-router-dom';
 
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
                            <Link to="/dashboard/all" className='fas fa-money-check'>
                                <span className='left-dash-item'>
                                All expenses
                                </span>
                            </Link>
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
      
                            <Route exact path='/dashboard/:userId' component={FriendBillsContainer} />
                            <Route exact path='/dashboard/all' component={AllExpensesContainer} />
                    </div>

                    <div className='right-dash'>
                            <Switch>
                                {/* <Route exact path='/dashboard/all' render={()=>null} />   */}
                                <Route exact path='/dashboard/all' component={AllbalanceContainer} />                      
                                <Route exact path='/dashboard/:userId' component={FriendRemoveContainer} />
                            </Switch>

                             <Switch>
                                <Route exact path='/dashboard/all' render={()=>null} />
                                <Route exact path='/dashboard/:userId' component={FriendBalanceContainer} />
                                
                            </Switch>

                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default Dashboard