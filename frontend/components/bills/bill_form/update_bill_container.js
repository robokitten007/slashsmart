import { connect } from 'react-redux';
import { updateBill, fetchBill, fetchBills } from '../../../actions/bill_actions'
import UpdateBillForm from './update_bill_form';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    // debugger
    // console.log("got here");
    let currentUser=state.entities.users[state.session.id]
    
     const pathName = ownProps.location.pathname
     
    // let friendId= parseInt(ownProps.match.params.userId)
    let bills = Object.values(state.entities.bills)
    let arr = pathName.split('/')
    let billId = parseInt(arr[arr.length-1])
    let SingleBill
    bills.forEach((bill)=>{
        if(bill.id === billId){
            SingleBill = bill
        }
    })
    // console.log(SingleBill)
    return {
        currentUser: currentUser,
        SingleBill,
        formType: 'Update Bill'  
    }

}

const mDTP = dispatch => ({
    fetchBill: (id)=>dispatch(fetchBill(id)),
    fetchBills: ()=>dispatch(fetchBills()),
    processForm: (bill) => dispatch(updateBill(bill)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(UpdateBillForm)) 
