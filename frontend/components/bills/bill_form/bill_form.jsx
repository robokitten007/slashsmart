import React from 'react';

class BillForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.bill
        this.handleSubmit = this.handleSubmit.bind(this)
    }


     update(field){
            return e => {
            this.setState({ [field]: e.target.value })
        }
     }
    
     handleSubmit(e){
        e.preventDefault();
        this.props.processForm(bill)
            .then(this.props.closeModal)
     }

    render(){
        const friendList = this.props.friends.map((friend)=>friend.friend)
        const
        return (

        <div className="addex-form">
        <form onSubmit={this.handleSubmit} className="addex-form">
          
          <div className="addex-head">
            <span>Add an expense</span>
            <div onClick={this.props.closeModal} className="close-x">X</div>
          </div>
        
          <div className='addex-friends'>
            <div className='friends-wrd'>
            With
            <span id='font-bold'> you </span>
            and: 
            </div>
            
            <AutoComplete 
            friends={friendList}
            // selectFriendProp={this.selectedFriend}
            />

            <div className='addex-friends-added'>
            <span className='added-friends-wrd'>Friends added:</span>
            {
              this.state.friends_arr.map( (friend_id, i) =>
              <ul>
              <li key={`friend_id-${i}`}>
                {this.props.usersIndexObj[friend_id].name}  
              </li>
              </ul>
              
              )
            }
            </div>

          
          </div>

          <div className='addex-details-1'>
            
            <div className='details-1-left'>
            
      
            <div className='categories-list'>
                <label> Category
                    <input type="text"
                        placeholder = 'General'
                        name='category'
                        value={this.state.category}
                        onChange={this.update('category')}
                            />
                </label>
            </div>

            {/* <img src={window.category_icon} alt="" className='category-icon-medium'/> */}
            
            </div>

            <div className='details-1-right'>

            <div className='addex-desc-amt'>
                <span>Enter a description:</span>
                <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="addex-desc"
                />
                <br/>
                <br/>
                <span>Amount:</span>
                <br/>
                {/* <span>$</span> */}
                <input type="number"
                value={this.state.amount}
                onChange={this.update('amount')}
                className="addex-amt"
                />
            </div>

            </div>
            </div>

          <div className='addex-details-2'>
            <div className='details-2-top'>
            Paid by
            <div className='addex-paidby'>
            <select className='paidby-selector' onChange={this.update('paid_by_id')} value={this.state.paid_by_id}>
              <option value={this.props.currentUser.id}>you</option>
            {
              this.state.friends_arr.map( (friend_id, i) => 
              <option value={friend_id} key={`friend_id-${i}`}>
                 {this.props.usersIndexObj[friend_id].name}  
              </option>
              )
            }
            </select>
            </div>
            and split equally.
            </div>
            <div className='details-2-middle'>
              {/* per person calculation */}
              ($
              {perPerson2}
              /person)
            </div>
            <div className='details-2-bottom'>
              Notes:
              <br/>
              <textarea
                value={this.state.notes}
                onChange={this.update('notes')}
                className="addex-notes"
                />
            </div>

          </div>

          <div className="addex-buttons">
            <input className="ae-btn-cancel" type="submit" value="Cancel" />
            <input className="ae-btn-save" type="submit" value="Save" />
          </div>

        </form>
      </div>
  );
        
        )
     
    }


}

export default BillForm