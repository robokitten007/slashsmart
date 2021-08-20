import React from 'react';
import { connect } from 'react-redux';
import AllExpensesIndex from './all_expenses_index';
import { fetchBill, fetchBills, deleteBill } from '../../actions/bill_actions'
import { openModal, closeModal } from '../../actions/modal_actions';



const mSTP = state =>{
    return (
        { 
            currentUser: state.entities.users[state.session.id],
            bills: Object.values(state.entities.bills)  
    })
}

const mDTP = dispatch =>({

    fetchBills: ()=>dispatch(fetchBills()),
    fetchBill: (id)=>dispatch(fetchBill(id)),
    deleteBill: (id)=>dispatch(deleteBill(id)),
    updateBillForm: (singleBill) => dispatch(openModal('Update Bill', singleBill)),
    closeModal: ()=>dispatch(closeModal())

})


export default connect(mSTP, mDTP)(AllExpensesIndex)