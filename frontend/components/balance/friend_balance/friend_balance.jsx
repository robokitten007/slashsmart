import React from 'react';


class FriendBalance extends React.Component{
    constructor(props){
        super(props)
        this.getBalance = this.getBalance.bind(this)
        this.color = this.color.bind(this)
        this.payee = this.payee.bind(this)
        this.payer = this.payer.bind(this)
    }


getBalance(){
    const {currentUser, friend, friendBills} = this.props

    if(!friend){
        return null;
    }
    
    let userName = friend.user    
    let friendName = friend.friend
    let balance = 0
    //get user & friend's name
    
    friendBills.forEach((bill) => {
        if(bill.author === userName && !bill.paid_by_user){
            balance = balance - bill.amount
        }else if (bill.author === friendName && bill.paid_by_user){
            balance = balance - bill.amount
        } else{
            balance = balance + bill.amount
        }
        
    })

        balance = (balance/2).toFixed(2)
        // console.log(balance)
        return balance
}

    color(){
        if (this.getBalance() < 0){
            return 'bill-red'
        }else {
            return 'bill-green'
        }
    }


    payer(){
    const {friend} = this.props

    if(!friend){
        return null;
    }
    
    let friendName = friend.friend
    if(this.getBalance()>0){
        return 'you'
    }else{
        return `${friendName}`
    }}

    payee(){
    const {friend} = this.props

    if(!friend){
        return null;
    }
    
    let friendName = friend.friend
    if(this.getBalance()>0){
        return `${friendName} owes `
    }else{
        return 'You owe '
    }}
    


    render(){
        let finalBalance = this.getBalance()
        if (finalBalance < 0){
            finalBalance = -finalBalance
        }
        console.log("friend balance")
        return (

            
            <div className='friend-balance'>
                <h1>YOUR BALANCE From FriendBalance Container</h1>
                <span className={this.color()}>{this.payee()}{this.payer()}</span>
                <p className={this.color()}>${finalBalance}</p>
            </div>
        )
       
    }

}

export default FriendBalance;