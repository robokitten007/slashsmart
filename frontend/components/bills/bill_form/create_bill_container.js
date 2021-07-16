import { connect } from 'react-redux';
import { createBill } from '../../../actions/bill_actions'
import BillForm from './bill_form';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  
    let currentUser=state.entities.users[state.session.id]
    
     const pathName = ownProps.location.pathname
     
    // let friendId= parseInt(ownProps.match.params.userId)
    let friends = Object.values(state.entities.friends)
    let arr = pathName.split('/')
    let Id = parseInt(arr[arr.length-1])

    return {
        currentUser: currentUser,
        friends: friends,
        friendId: Id,
        bill: { 
                user_id: currentUser.id,
                friend_id: Id,
                amount: 0,
                amount_paid: 0,
                description: '',
                category: 'general',
                notes:'',
                paid_by_user: 'true'

        },
        formType: 'Create Bill'
    }
 
}

const mDTP = dispatch => ({
    processForm: (bill) => dispatch(createBill(bill)),
    //  otherForm: (
    //   <button onClick={() => dispatch(openModal('create bill'))}>
    //       signup
    //   </button>
    // ),
      closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(BillForm))
// export default 