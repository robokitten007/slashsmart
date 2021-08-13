import * as BillsUtil from '../util/bill_api_util';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';
export const CLEAR_BILL_ERRORS = "CLEAR_BILL_ERRORS";

const receiveBills = bills => ({
    type: RECEIVE_BILLS,
    bills
})

const receiveBill = bill => ({
    type: RECEIVE_BILL,
    bill
})

const removeBill = (id) => ({
    type: REMOVE_BILL,
    id
})

const billErrors = (errors) => ({
  type: RECEIVE_BILL_ERRORS,
  errors
});

export const clearBillErrors = () => {
  return {
    type: CLEAR_BILL_ERRORS,
  };
};


export const fetchBills = ()=>dispatch =>(
    BillsUtil.fetchBills()
        .then(bills => (dispatch(receiveBills(bills))),
        err => dispatch(billErrors(err.responseJSON)))
)


export const fetchBill = (id) => dispatch =>(
    BillsUtil.fetchBill(id)
        .then(bill => (dispatch(receiveBill(bill))),
        err => dispatch(billErrors(err.responseJSON)))
)

export const deleteBill = (id) => dispatch =>(
    BillsUtil.deleteBill(id)
        .then((id)=>(dispatch(removeBill(id))),
        err => dispatch(billErrors(err.responseJSON)))
)

export const updateBill = (bill) => dispatch =>(
    BillsUtil.updateBill(bill)
        .then((bill)=>(dispatch(receiveBill(bill))),
        err => dispatch(billErrors(err.responseJSON)))
)

export const createBill = (bill) => dispatch =>(
    BillsUtil.createBill(bill)
        .then((bill)=>(dispatch(receiveBill(bill))),
        err => dispatch(billErrors(err.responseJSON)))
)