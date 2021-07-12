import React from 'react';
import {Link} from 'react-router-dom';

class FriendRemove extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {deleteFriend, id} = this.props
        return (
            <div className='friend-setting'>
            <h1>FRIEND SETTINGS</h1>
            <button onClick ={()=>deleteFriend(id)}>Remove this friend </button>
            </div>
        )
    }

}

export default FriendRemove;