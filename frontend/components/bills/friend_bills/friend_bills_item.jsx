import React from 'react';

class FriendBillItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const{currentUser, friend, bill, deleteBill} = this.props
        return( 
            <div>
                <div className='expense' >
                    <div className='summary'>
                        <div className='summary-mainblock'>
                            <div className='updated-time'>
                                {bill.updated_at}
                            </div>
                            <div className='bill-description'>
                                {bill.description}
                            </div>
                        </div>
                         <div className='amount'>
                                {bill.amount}
                        </div>
                        <div className='amount-paid'>
                            {bill.amount_paid}
                        </div>

                    </div>
                
            

                </div>
            </div>
        )
    }

}

export default FriendBillItem