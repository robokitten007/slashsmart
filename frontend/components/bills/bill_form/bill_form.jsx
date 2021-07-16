import React from 'react';

class BillForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.bill
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getFriend = this.getFriend.bind(this)
        // console.log(this.props.bill)
  
    }

    getFriend(){

      const {friends, friendId} = this.props
      // console.log(friendId)
      let friendName
      friends.forEach((friend)=>{
        if(friend.friend_id === friendId){
          friendName = friend.friend
        }
      })
      // console.log(friendName)
      return friendName
    }

     update(field){
            return e => {
            this.setState({ [field]: e.target.value })
        }
     }
    

     handleSubmit(e){
      
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.props.closeModal)
     }

    render(){
        // const friendList = this.props.friends.map((friend)=>friend.friend)
        // console.log(friendList)
        
          // if(!this.props.friendId){
          //   return null;
          // }
        
        return (

        
        <div className="add-bill-form">
        <form onSubmit={this.handleSubmit} className="add-bill-form">
          
              <div className="add-bill-head">
                <span>Add an expense</span>
                <div onClick={this.props.closeModal} className="close-x">X</div>
              </div>
        
          <div className='add-bill-friends'>
                <div className='friend-name'>
                With
                <span id='font-bold'> you </span>
                and: 
                </div>
              
                <span>{this.getFriend()}</span>
          
          </div>

          <div className='add-bill-details-1'>
            
                <div className='details-1-left'>
                    
                    <div className='category'>
                        <label> Category
                            <input type="text"
                                placeholder = 'General'
                                name='category'
                                value={this.state.category}
                                onChange={this.update('category')}
                                    />
                        </label>
                    </div>

                    <label for='paidby' className='details-2-top'>
                    Paid by:
                    </label>
          

                    <div className='add-bill-paidby'>
                      <select name='paidby'
                              className='paidby' 
                              onChange={this.update('paid_by_user')} 
                              value={this.state.paid_by_user}>
                        <option value="true">you</option>

                        <option value="false">
                          {this.getFriend()}  
                        </option>
                      </select>
                    </div>
                
                </div>

            <div className='details-1-right'>

                <div className='add-bill-desc-amt'>
                    <span>Enter a description:</span>
                    <input type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    className="add-bill-desc"
                    />
                    <br/>
                    <br/>
                    <span>Total Amount:</span>
                    <input type="number"
                    value={this.state.amount}
                    onChange={this.update('amount')}
                    className="add-bill-amt"
                    />
                    <br/>
                    <br/>
                    <span>Amount_Paid:</span>
                    <br/>
                    <input type="number"
                    value={this.state.amount_paid}
                    onChange={this.update('amount_paid')}
                    className="add-bill-amt"
                    />
                </div>
            </div>

          </div>

          <div className='add-bill-details-2'>
            <div className='details-2-bottom'>
              Notes:
              <br/>
              <textarea
                value={this.state.notes}
                onChange={this.update('notes')}
                className="add-bill-notes"
                />
            </div>

          </div>

          <div className="add-bill-buttons">
            {/* <input className="btn-cancel" type="submit" value="Cancel" /> */}
           <input className="btn-save" type="submit" value="Save" /> 
          <button className='btn-cancel' onClick={this.props.closeModal}>Cancel</button>
          </div>

        </form>

      </div>
        );
        
    }

}

export default BillForm