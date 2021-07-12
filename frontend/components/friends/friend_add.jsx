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

    //  renderErrors() {
    //     let { currentUser } = this.props
    //     if (!currentUser) return null
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => {
    //                 return (<li key={i}>
    //                     {error}
    //                 </li>)
    //             })}
    //         </ul>
    //     )
    // }
    render (){
        return (
        <div>
        {this.renderErrors}
        <form className='friend-add-form' onSubmit={this.handleSubmit}>
            <h1>Add Friends</h1>
            <div >
            <input type="text"
                   placeholder = 'Enter an email address'
                   name="email"
                   value={this.state.email}
                   onChange={this.update("email")}
                 />
        <button type='submit'>Add Friend</button>
            </div>
        </form>

    </div>
        )}
}

export default FriendAdd;