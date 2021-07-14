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
    const {currentUser, friend, fetchBill, deleteBill} = this.props

        if (!friend) {
            return null
        }

        return(
           
        <div>
                
            <div className='topbar-friend'>
                <h2>{friend.friend}</h2>
                <button >Add Expense</button>
            </div>
            <div className='expense-list'>
                {this.fetchFriendBills().length === 0 ? (
                <p className="no-bills">
                {`You dont have any transactions with ${friend.friend}!`}
                </p>) : 
                (
                this.fetchFriendBills().map((bill) => (
                <FriendBillItem
                    key={bill.id}
                    deleteBill={deleteBill}
                    currentUser={currentUser}
                    fetchBill={deleteBill}
                    bill={bill}
                />
                ))
            )}
            </div>
        </div>
        )    
    
    }
}

export default FriendBillsIndex;
