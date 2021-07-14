import { connect } from 'react-redux';
import FriendBillsIndex from './friend_bills_index';
import { fetchBills, fetchBill,deleteBill } from '../../../actions/bill_actions';

const mSTP=(state, ownProps) =>{
    // let bills = Object.values(state.entities.bills)
    // let currentUser = state.entities.users[state.session.id]
    // let billIds = []
    // console.log('inside friend bills container')
    // if(bills.length >0){
    //   bills.forEach((bill)=>{
    //     if(bill.user_id === currentUser.id && bill.friend_id === parseInt(ownProps.match.params.userId) ||
    //     (bill.user_id === parseInt(ownProps.match.params.userId) && bill.friend_id === currentUser.id)
    //     ){
    //       console.log('bill.id:' + bill.id)
    //       billIds.push(bill.id)
    //     }
    //   })
    // }
    return ({
      currentUser: state.entities.users[state.session.id],
      friend: state.entities.users[ownProps.match.params.userId],
      bills: Object.values(state.entities.bills)
      // billIds: billIds
    })

    // currentUser: state.entities.users[state.session.id],
    // bills: Object.values(state.entities.bills)
}


const mDTP = dispatch =>({
  fetchBills: ()=>dispatch(fetchBills()),
  fetchBill: (id)=>dispatch(fetchBill(id)),
  deleteBill: (id)=>dispatch(deleteBill(id))
})


export default connect(mSTP, mDTP)(FriendBillsIndex)