import React from 'react';

class FriendBillItem extends React.Component {
    constructor(props){
        super(props);
        this.payer = this.payer.bind(this);
        this.payee = this.payee.bind(this);
        this.getDate = this.getDate.bind(this);
        this.color = this.color.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    

    color() {
        const { bill, currentUser } = this.props
        if (bill.user_id === currentUser.id && bill.paid_by_user) {
            return 'bill-green'
        } else if (bill.user_id === currentUser.id && !bill.paid_by_user) {
            return 'bill-red'
        } else if (bill.user_id !== currentUser.id && bill.paid_by_user) {
            return 'bill-red'
        } else if (bill.user_id !== currentUser.id && !bill.paid_by_user) {
            return 'bill-green'
        }

    }

   payer() {
    //    debugger
        const { bill, currentUser } = this.props
        if (bill.user_id === currentUser.id && bill.paid_by_user) {
            return 'You paid' 
    
        } else if (bill.user_id === currentUser.id && !bill.paid_by_user) {
            return `${bill.partner} paid`
        } else if (bill.user_id !== currentUser.id && bill.paid_by_user) {
            return `${bill.author} paid`
        } else if (bill.user_id !== currentUser.id && !bill.paid_by_user) {
            return 'You paid'
        }

        // return 'test'
    }

      payee() {
        const { bill, currentUser } = this.props
        if (bill.user_id === currentUser.id && bill.paid_by_user) {
            return `You lent ${bill.partner}`
        } else if (bill.user_id === currentUser.id && !bill.paid_by_user) {
            return `${bill.partner} lent you`
        } else if (bill.user_id !== currentUser.id && bill.paid_by_user) {
            return `${bill.author} lent you`
        } else if (bill.user_id !== currentUser.id && !bill.paid_by_user) {
            return `You lent ${bill.author}`
        }
    }

     getDate() {
        const { bill } = this.props
        const monthHead = {
            "01": "JAN",
            "02": "FEB",
            "03": "MAR",
            "04": "APR",
            "05": "MAY",
            "06": "JUN",
            '07': "JUL",
            "08": "AUG",
            "09": "SEP",
            "10": "OCT",
            '11': "NOV",
            "12": "DEC"
        }
         let date = bill.updated_at
         let month = date.slice(5, 7)
         let day = date.slice(8, 10)
       return (
            <div className='friend-bill-date'>
                <p className='friend-bill-month'>{monthHead[month]}</p> <p className='friend-bill-day'>{day}</p>
            </div>
        )
    }    
      handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        const { bill } = this.props
        if (confirm("Are you sure you want to delete this bill? This will completely remove this bill from ALL people invovled.")) {
            this.props.deleteBill(bill.id)
        }
    }    

    render(){
        const{currentUser, friend, bill, fetchBill, deleteBill} = this.props
        return( 
               
           <li >
                <div className='bill-index-item'>
                    <span className='bill-left'>y
                        {this.getDate()} <p>{this.props.bill.description}</p>
                    </span>
                    <span className='bill-right'>
                        <div className='bill-payer'>
                            <p className='bill-payer-name'>{this.payer()}</p>  
                            {/* <p className='bill-payer-amount'>${(this.props.bill.amount_paid).toFixed(2)}</p> */}
                            <p className='bill-payer-amount'>${(this.props.bill.amount).toFixed(2)}</p>

                        </div>
                        <div className='bill-payee'>
                            <p className='bill-payer-name'>{this.payee()}</p> 
                            {/* <p className={this.color()} >${(this.props.bill.amount_paid-(this.props.bill.amount)/2).toFixed(2)}</p> */}
                            <p className={this.color()} >${(this.props.bill.amount/2).toFixed(2)}</p>

                        </div>
                        <div className='delete-bill'>
                            {/* {<div onClick={()=>deleteBill(bill.id)} id="close-x">X</div>} */}
                            <div id="close-x" onClick={this.handleClick}>x</div>
                        </div>
                    </span>
                </div>
               
            </li>
        )
       
    }

}

export default FriendBillItem