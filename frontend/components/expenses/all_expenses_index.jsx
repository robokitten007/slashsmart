import React from 'react';
import AllExpensesItem from './all_expenses_item'


class AllExpensesIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBills();
    }

  render(){
    const {currentUser, bills, fetchBill, deleteBill, updateBillForm} = this.props
    
    if(!bills){
        return null
    }

    return(
        <div>
            <div className='topbar-friend'>
                <div>
                    <span>All expenses</span>
                </div>
                    
                {/* <button onClick ={this.handleClick}>Add Expense</button> */}
                <div>
                    {/* <button>Add an expense</button> */}
                    {/* {this.props.createBillForm} */}
                </div>
            </div>
            <div className='expense-list'>
                <ul>
             
                {bills.map((bill) => (
                <AllExpensesItem
                    key={bill.id}
                    deleteBill={deleteBill}
                    currentUser={currentUser}
                    fetchBill={fetchBill}
                    bill={bill}
                    updateBillForm={updateBillForm}
                />
                ))
            }
            </ul>
            </div>
        </div>     
    )
  }

}

export default AllExpensesIndex
