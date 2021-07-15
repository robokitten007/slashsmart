import { connect } from 'react-redux';
import { createBill } from '../../../actions/bill_actions'
import BillForm from './bill_form';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';


const mSTP = (state, ownProps) => {
    
    let currentUser=state.entities.users[state.session.id]
   
    let friendId= parseInt(ownProps.match.params.userId)
    let friends = Object.values(state.entities.friends)

    return {
        currentUser: currentUser,
        friends: friends,
        friendId: friendId,
        bill: { 
                user_id: currentUser.id,
                friend_id: firendId,
                amount: 0,
                amount_paid: 0,
                description: '',
                category: 'general',
                notes:'',
                paid_by_user: true

        },
        formType: 'Create Bill'
    }
 
}

const mDTP = dispatch => ({
    processForm: (bill) => dispatch(createBill(bill)),
    //  otherForm: (
    //   <button onClick={() => dispatch(openModal('signup'))}>
    //     Signup
    //   </button>
    // ),
      closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(BillForm))