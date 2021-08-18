import React from 'react'

class OverviewItem extends React.Component{

    constructor(props){
        super(props)
        this.getFriendBills = this.getFriendBills.bind(this)
        this.getBalance = this.getBalance.bind(this)
        this.color = this.color.bind(this)
        this.display = this.display.bind(this)
    }

    getFriendBills(){
        const {bills, friend} = this.props
        
        let friendBills =[];
        bills.forEach((bill) =>{
            if(bill.friend_id === friend.friend_id || bill.user_id === friend.friend_id){
                friendBills.push(bill)
            }
        })

        return friendBills
    }

    getBalance(){
        const {currentUser} = this.props
        let userName = currentUser.name
        let balance = 0
        this.getFriendBills().forEach((bill)=>{
            if(bill.author === userName && !bill.paid_by_user ){
                balance = balance - bill.amount
            }else if(bill.author !==userName && bill.paid_by_user){
                balance = balance - bill.amount
            }else {
                balance = balance + bill.amount
            }
        })
         balance = (balance/2).toFixed(2)
         return balance
    }
    color(){
        if(this.getBalance() < 0){
            return 'bill-red'
        }else {
            return 'bill-green'
        }
    }

    display(){
        const {friend} = this.props
        if(this.getBalance()>0){
            return 'owes you $'
        }else {
            return 'you owe $'
        }
    }


    render(){
         const {currentUser, friend} = this.props
        if(this.getFriendBills().length === 0){
            return null;
        }
       
        let finalBalance = this.getBalance()
        if(finalBalance <0){
            finalBalance = -finalBalance
        }

        return (
            <li>
                <h1 >{friend.friend}</h1>
                <span className={this.color()}>{this.display()}{finalBalance}</span>

            </li>
        )
    }
}

export default OverviewItem