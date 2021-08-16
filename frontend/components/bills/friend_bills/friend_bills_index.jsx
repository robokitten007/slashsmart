import React from 'react';
import FriendBillItem from './friend_bills_item';

import { Link } from 'react-router-dom';


class FriendBillsIndex extends React.Component {
    constructor(props){
        super(props);
        this.fetchFriendBills = this.fetchFriendBills.bind(this)
        
    }

    componentDidMount(){
        this.props.fetchBills();
    }

    fetchFriendBills(){

        const { bills, friend } = this.props;
        let friendBills = [];

        bills.forEach((bill) => {
        if (friend.friend_id === bill.friend_id || friend.friend_id === bill.user_id) {
            friendBills.push(bill);
        }
        });
        return friendBills;
    }

    
    render(){
    const {currentUser, friend, fetchBill, deleteBill, updateBillForm} = this.props

        if (!friend) {
            return null
        }

        return(
           
        <div>
                
            <div className='topbar-friend'>
                <div>
                    <span>{friend.friend}</span>
                </div>
                    
                {/* <button onClick ={this.handleClick}>Add Expense</button> */}
                <div>
                    {this.props.createBillForm}
                </div>
            </div>
            <div className='expense-list'>
                <ul>
                {this.fetchFriendBills().length === 0 ? (
                    <div>
                <p id="empty">
                        <img id='no-transaction'src={window.no_transaction} alt="empty" />
                {`You dont have any transactions with ${friend.friend}!`}
                </p>
                    </div>)
               : 
                (
                this.fetchFriendBills().map((bill) => (
                <FriendBillItem
                    key={bill.id}
                    deleteBill={deleteBill}
                    currentUser={currentUser}
                    fetchBill={fetchBill}
                    bill={bill}
                    updateBillForm={updateBillForm}
                />
                ))
            )}
            </ul>
            </div>
        </div>
        )    
    
    }
}

export default FriendBillsIndex;
