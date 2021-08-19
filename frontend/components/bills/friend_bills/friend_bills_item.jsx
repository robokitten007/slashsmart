import React from 'react';
import {Link} from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import UpdateBillContainer from '../bill_form/update_bill_container'
class FriendBillItem extends React.Component {
    constructor(props){
        super(props);
    //set state to trigger automatic rendering
        this.state = {
            showDetails: false
        }
        this.payer = this.payer.bind(this);
        this.payee = this.payee.bind(this);
        this.getDate = this.getDate.bind(this);
        this.color = this.color.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBill = this.handleBill.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
        // this.showDetails = false
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
        const monthTitle = {
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
         let date = bill.created_at
         let month = date.slice(5, 7)
         let day = date.slice(8, 10)
       return (
            <div className='friend-bill-date'>
                <p className='friend-bill-month'>{monthTitle[month]}</p> <p className='friend-bill-day'>{day}</p>
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

    handleBill(e){
        e.preventDefault();
        e.stopPropagation();
        const { bill } = this.props
        // console.log(bill)
        this.props.updateBillForm(bill)
        
    }
    
    handleToggle(e){
        e.preventDefault();
        // e.stopPropagation();
       if (!this.state.showDetails) {
           this.setState({showDetails: true})
       } else {
           this.setState({showDetails: false})
       }
    }


    render(){
        // const show_details = this.showDetails ? 'show' : 'not-show'
        const{currentUser, friend, bill, fetchBill, deleteBill} = this.props
        // debugger
        return( 
               
           <li >
                <div onClick={this.handleToggle} className='bill-index-item'>
                    <span className='bill-left'>
                        {/* <span className='bill-left-1'> */}
                        <span>{this.getDate()} </span>
                        <span className="fas fa-receipt fa-2x"></span> 
                        <p>{this.props.bill.description}</p>
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
            
                <div className={this.state.showDetails ? 'show' : 'not-show'}>
                    {/* {console.log('got here!')}
                    {console.log(show_details)} */}
                    <div className='bill-details-1'>
                        <span className='fas fa-receipt fa-4x'> </span>
                        <span className='bill-details-1-right'>
                            <p>
                                {this.props.bill.description}
                            </p>
                            <p className='bill-details-1-right-amount'> $
                                {this.props.bill.amount}
                            </p>
                            <p className='bill-details-1-right-time'>Added by {this.props.bill.author} on {this.props.bill.created_at.slice(0,10)}</p>
           
                            <button className='bill-edit'onClick={this.handleBill}>Edit expense</button>
                        </span>
                    </div>
                    <div className='bill-details-2'>
                        <div className='bill-details-2-left'>
                        <span className='fas fa-user-circle'>{this.payer()} ${(this.props.bill.amount).toFixed(2)}</span>
                        <span className='fas fa-user-circle'>{this.payee()} ${(this.props.bill.amount/2).toFixed(2)}</span>
                        </div>

                        <div className='bill-details-2-right'>
                            <p className='fas fa-comment'>Notes and Comments:</p>
                            <p id={this.props.bill.notes ? 'show' : 'not-show'}className='bill-details-2-right-notes'>{this.props.bill.notes}</p>
                            <form action=""></form>
                        <button>Add comments</button>
                        </div>

                    </div>

                </div>
               
            </li>
        )
       
    }

}

export default FriendBillItem