import React from 'react';
import { connect } from 'react-redux';
import AllBalance from './all_balance';

const mSTP =(state) =>({
    currentUser: state.entities.users[state.session.id],
    bills: Object.values(state.entities.bills)
})


export default connect(mSTP, null)(AllBalance)