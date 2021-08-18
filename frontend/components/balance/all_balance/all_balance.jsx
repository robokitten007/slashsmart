import React from 'react';


class AllBalance extends React.Component{
    
    constructor(props){
        super(props)
        this.getBalance = this.getBalance.bind(this)
        this.color = this.color.bind(this)
        this.display = this.display.bind(this)
    }

    getBalance(){
        const {currentUser, bills} = this.props

        if(!bills){
            return null;
        }
        let balance = 0
        let userName = currentUser.name

        bills.forEach((bill) => {
            if(bill.author === userName && !bill.paid_by_user){
                balance = balance - bill.amount
            }else if (bill.author !== userName && bill.paid_by_user){
                balance = balance - bill.amount
            } else {
                balance = balance + bill.amount
            }

        })

        balance = (balance/2).toFixed(2)
        return balance

    }

      color(){
        if (this.getBalance() < 0){
            return 'bill-red'
        }else {
            return 'bill-green'
        }
    }

     display(){
         if(this.getBalance()<0){
             return `you owe `
         }else {
             return `you are owed `
         }
     }

    render(){
        let finalBalance = this.getBalance()
        if(finalBalance < 0){
            finalBalance = -finalBalance
        }
        return (
            <div className = 'all-balance'>
                <h1>YOUR TOTAL BALANCE</h1>
                <span className={this.color()}>{this.display()}</span>
                <p className={this.color()}>${finalBalance}</p>
            </div>
        )
    }


}

export default AllBalance