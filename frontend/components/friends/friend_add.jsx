import React from 'react';
import {Link} from 'react-router-dom';

class FriendAdd extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }



    handleSubmit(e){
        e.preventDefault();
        this.props.addFriend(this.state.email)
        this.setState({email: ''})
    }

     update(field){
        return e=>this.setState({[field]: e.target.value})
    }
    render (){
        return (
        <div>
            <p>this is the add friend component</p>
        <form onSubmit={this.handleSubmit}>ADD FRIEND
        <br />
        <br />
        
            <label > FRIEND EMAIL
            <input type="text"
                   name="email"
                   value={this.state.email}
                   onChange={this.update("email")}
                 />
        </label>
        <button type='submit'>add friend</button>
        </form>
        
    </div>
        )}
}

export default FriendAdd;