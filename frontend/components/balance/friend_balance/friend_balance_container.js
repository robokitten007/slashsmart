import React from 'react';
import { connect } from 'react-redux';
import FriendBalance from './friend_balance';
// import { fetchBills } from '../../../util/bill_api_util';



const mSTP =(state, ownProps) => {

    let friend
    let friendships = Object.values(state.entities.friends)
    if(friendships.length > 0){
        friendships.forEach((friendship) =>{
            if(friendship.friend_id === parseInt(ownProps.match.params.userId)){
                friend = friendship
            }
        })
    }

    let currentUser = state.entities.users[state.session.id]
    let bills = Object.values(state.entities.bills)
    let friendBills = [];
    //get bills between currentUser & current friend
    if(friend){
         bills.forEach((bill) =>{
        if ((bill.user_id === currentUser.id && bill.friend_id === friend.friend_id)||(bill.user_id === friend.friend_id && bill.friend_id === currentUser.id))
        friendBills.push(bill)
    })}
//    console.log(friend)
//    console.log(friendBills)
    return ({
        currentUser: state.entities.users[state.session.id],
        friend: friend,
        friendBills: friendBills
    })    
}


// const mDTP = dispatch =>({
//     fetchBills: () =>dispatch(fetchBills())
// })

// export default withRouter(connect(mSTP, mDTP))(FriendBalance)
export default connect(mSTP, null)(FriendBalance)








