// import { connect } from 'react-redux';
// import { updateBill } from '../../../actions/bill_actions'
// import BillForm from './bill_form';
// import { withRouter } from 'react-router-dom';
// import { openModal, closeModal } from '../../../actions/modal_actions';


// class UpdateBillForm extends React.Component {
//   componentDidMount(){
//     this.props.fetchBill(bill.id)
//   }

// //   render() {
  
// //     const {bill, currentUser } = this.props;

// //     if (!bill) return null;
// //     return (
// //       <BillForm
// //         currentUser = {currentUser}
// //         friendId ={bill.friend_id}
// //         bill={bill} />
// //     );
// //   }
// // }

// const mSTP = (state, ownProps) => {
//     return 
//         {
//             formType: 'Update Bill'
//         }
//     }
 


// const mDTP = dispatch => ({
//     processForm: (id) => dispatch(updateBill(id)),  
//     closeModal: () => dispatch(closeModal())
// })

// export default withRouter(connect(mSTP, mDTP)(BillForm))