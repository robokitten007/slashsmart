import React from 'react';
import { connect } from 'react-redux';
import OverviewIndex from './overview_index';
import { fetchBills } from '../../actions/bill_actions'

const mSTP = state =>({

    currentUser: state.entities.users[state.session.id],
    bills: Object.values(state.entities.bills),
    friends: Object.values(state.entities.friends)
})

const mDTP = dispatch =>({
    fetchBills: () => dispatch(fetchBills())
})

export default connect(mSTP,mDTP)(OverviewIndex)