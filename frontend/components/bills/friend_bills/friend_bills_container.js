import { connect } from 'react-redux';
import FriendBillsIndex from './friend_bills_index';
import { fetchBills, fetchBill,deleteBill } from '../../../actions/bill_actions';

const mSTP=(state, ownProps) =>({
    currentUser: state.entites.users[state.session.id],
    friend: state.entities.users[ownProps.match.parasm.userId],
    bills: Object.values(state.entites.bills)
})


const mDTP = dispatch =>({
  fetchBills: ()=>dispatch(fetchBills()),
  fetchBill: (id)=>dispatch(fetchBill(id)),
  deleteBill: (id)=>dispatch(deleteBill(id))
})


export default connect(mSTP, mDTP)(FriendBillsIndex)