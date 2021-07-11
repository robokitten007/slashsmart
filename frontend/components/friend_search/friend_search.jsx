import React from 'react';
import {Link} from 'react-router-dom';

class FriendSearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)
    }

    handleSubmit(){
        e.preventDefault();
        this.setState

    }

     update(email){
        return e=>this.setState({[email]: e.target.value})
    }
    render (){
        
        return null
    }
}

export default FriendSearch;