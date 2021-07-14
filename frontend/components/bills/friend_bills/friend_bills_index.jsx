import React from 'react';
import FriendBillItem from './friend_bills_item';

import { Link } from 'react-router-dom';


class FriendBillsIndex extends React.Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchBills();
    }

    render(){
        const {currentUser, friend, bills, deleteBill} = this.props
        // if(!currentUser || !friend) return null;

        return(
            <div>
                this is friend bills index
            </div>
            // <div>

            // <div>
            //     <h2>{friend.name}</h2>
            //     <button >Add Expense</button>
            // </div>
            // <ul>
            //     {bills.map((bill)=>(
            //         <FriendBillItem
            //             key={bill.id}
            //             currentUser={currentUser}
            //             friend={friend}
            //             bill={bill}
            //             deleteBill={deleteBill}
            //             />
            //     ))}
            // </ul>
            // </div>
        )
    }

}

export default FriendBillsIndex;
