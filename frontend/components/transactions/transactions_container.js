import React from 'react';
import { connect } from 'react-redux';
import FriendBillsIndex from './friend_bills_index';
import { fetchBills, fetchBill,deleteBill } from '../../../actions/bill_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


