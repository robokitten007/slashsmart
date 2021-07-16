import React from 'react';
import { connect } from 'react-redux';
import FriendBillsIndex from './friend_bills_index';
import { fetchBills, fetchBill,deleteBill } from '../../../actions/bill_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mSTP=(state, ownProps) =>{
    let friend
    let friendships = Object.values(state.entities.friends)
    if (friendships.length > 0){
        friendships.forEach((friendship) =>{

            if (friendship.friend_id === parseInt(ownProps.match.params.userId)) {                
                friend = friendship
            }
        })
    }
    return ({
      currentUser: state.entities.users[state.session.id],
      friend: friend,
      bills: Object.values(state.entities.bills)  
    })

}


const mDTP = dispatch =>({
  fetchBills: ()=>dispatch(fetchBills()),
  fetchBill: (id)=>dispatch(fetchBill(id)),
  deleteBill: (id)=>dispatch(deleteBill(id)),
  createBillForm: (
      <button className='create-bill-btn' onClick={() => dispatch(openModal('Create Bill'))}>
        Add an expense
      </button>
    ),
    updateBillForm: (
      <button className='update-bill-btn' onClick={() => dispatch(openModal('Update Bill'))}>
        Edit an expense
      </button>
    ),
  closeModal: () => dispatch(closeModal()),
})


export default connect(mSTP, mDTP)(FriendBillsIndex)