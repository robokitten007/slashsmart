import { connect } from 'react-redux';
import { updateBill, fetchBill, fetchBills } from '../../../actions/bill_actions'
import UpdateBillForm from './update_bill_form';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    
    let currentUser=state.entities.users[state.session.id]
    let friends = Object.values(state.entities.friends)
    let singleBill = state.ui.singleBill
  
    // console.log(SingleBill)
    
    return {
        currentUser: currentUser,
        friends: friends,
        friendId: singleBill.friend_id,
        billId: singleBill.id,
        bill:{
            user_id: currentUser.id,
            friend_id: singleBill.friend_id,
            amount: singleBill.amount,
            description: singleBill.description,
            category: singleBill.category,
            notes: singleBill.notes,
            paid_by_user: singleBill.paid_by_user
        },
        formType: 'Update Bill'  
    }

}

const mDTP = dispatch => ({
    fetchBill: (id)=>dispatch(fetchBill(id)),
    fetchBills: ()=>dispatch(fetchBills()),
    processForm: (bill,id) => dispatch(updateBill(bill, id)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(UpdateBillForm)) 
