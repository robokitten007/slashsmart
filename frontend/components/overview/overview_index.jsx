import React from 'react';
import OverviewItem from './overview_item'

class OverviewIndex extends React.Component{
    constructor(props){
        super(props)
        this.totalPositiveBalance = this.totalPositiveBalance.bind(this)
        this.totalNegativeBalance = this.totalNegativeBalance.bind(this)
        this.getBalance = this.getBalance.bind(this)
        this.color = this.color.bind(this)
    }

    componentDidMount(){
        this.props.fetchBills()
    }


    totalPositiveBalance(){
        const {bills, currentUser} = this.props
        let positive = 0
        let userName = currentUser.name
        bills.forEach((bill)=>{
            if(bill.author === userName && bill.paid_by_user ){
                positive = positive + bill.amount
            }else if(bill.author !== userName && !bill.paid_by_user){
                positive = positive + bill.amount
            }
            
        })
            positive = (positive/2).toFixed(2)
            return positive

    }

    totalNegativeBalance(){
        const {bills, currentUser} = this.props
        let negative = 0
        let userName = currentUser.name
        bills.forEach((bill)=>{
            if(bill.author === userName && !bill.paid_by_user ){
                negative = negative - bill.amount
            }else if(bill.author !== userName && bill.paid_by_user){
                negative = negative - bill.amount
            }
        })
            negative = (negative/2).toFixed(2)
            return negative
    }

    getBalance(){
        let balance
        balance = parseFloat(this.totalPositiveBalance())+parseFloat(this.totalNegativeBalance())
        return balance
    }

    color(){
        if (this.getBalance() < 0){
            return 'bill-red'
        }else {
            return 'bill-green'
        }
    }

    render(){
        const {currentUser, bills, friends, fetchBills} = this.props
        return (
            <div>
                <div className='topbar-friend'>
                <div>
                    <span>Dashboard</span>
                </div>
                    
                {/* <button onClick ={this.handleClick}>Add Expense</button> */}
                <div>
                
                </div>
            </div>
            
                <div className='topbar-balance'>
                    <div className='topbar-balance-1'>
                        <p>total balance</p>
                        <span className={this.color()}>{this.getBalance()}</span>
                    </div>
                    
                    <div className='topbar-balance-2'>
                        <p>you owe</p>
                        <span className='bill-red'>{-this.totalNegativeBalance()}</span>
                    </div>

                    <div className='topbar-balance-3'> 
                        <p>you are owed</p>
                        <span className='bill-green'>{this.totalPositiveBalance()}</span>
                    </div>
                </div>

                <div className='expense-list'>
                    <ul>
                        {friends.map((friend)=>(
                            <OverviewItem
                                key={friend.id}
                                friend={friend}
                                fetchBills ={fetchBills}
                                currentUser ={currentUser}
                                bills={bills}
                            />
                        ))}
                    </ul>
                </div>




            </div>
        )
    }
}

export default OverviewIndex