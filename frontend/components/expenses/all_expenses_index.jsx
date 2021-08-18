import React from 'react';


class AllExpensesIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBills();
    }

  render(){
    const {currentUser, bills, fetchBill, deleteBill} = this.props
    
    if(!bills){
        return null
    }

    return(
        <div>
            this is allexpenseindex comp
        </div>     
    )
  }

}

export default AllExpensesIndex
