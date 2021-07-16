import React from 'react';
import {Link} from 'react-router-dom';

class FriendRemove extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

     handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (confirm("Are you sure you want to delete this friend? This will delete all bills you shared with them")) {
            this.props.deleteFriend(this.props.id)
        }
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