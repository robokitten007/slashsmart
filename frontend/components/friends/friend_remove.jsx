import React from 'react';

class FriendRemove extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.deleteFriendBills = this.deleteFriendBills.bind(this)
    }

     handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (confirm("Are you sure you want to delete this friend? This will delete all bills you shared with them")) {
            this.deleteFriendBills()
            this.props.deleteFriend(this.props.id)
            
        }
    }  
    //find all bills between current user and this particular user
    deleteFriendBills(){
        const {currentUser, bills, friendId} = this.props
        console.log(friendId)
        let friendBills =[]
        bills.forEach((bill)=>{
            if((bill.user_id === currentUser.id && bill.friend_id === friendId) || (bill.user_id === friendId && bill.friend_id === currentUser.id)){
                friendBills.push(bill)
            }
        })
    console.log('friendBills' + JSON.stringify(friendBills))
//delete all relevant bills
        friendBills.forEach((bill)=>{
            this.props.deleteBill(bill.id)
        })

    }

    render(){
        const {deleteFriend, id} = this.props
        return (
            <div className='friend-setting'>
            <h1>FRIEND SETTINGS</h1>
            {/* <button onClick ={()=>deleteFriend(id)}>Remove this friend </button> */}
            <button onClick ={this.handleClick}>Remove this friend </button>
            </div>
        )
    }

}

export default FriendRemove;