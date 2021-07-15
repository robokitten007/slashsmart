import { connect } from 'react-redux';
import { updateBill } from '../../../actions/bill_actions'
import BillForm from './bill_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return 
        {
            formType: 'Update Bill'
        }
    }
 


const mDTP = dispatch => ({
    processForm: (id) => dispatch(updateBill(id))   

})

export default withRouter(connect(mSTP, mDTP)(BillForm))