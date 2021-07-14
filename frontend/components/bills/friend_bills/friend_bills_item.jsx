import React from 'react';

class FriendBillItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const{currentUser, friend, bill, deleteBill} = this.props
        return( 
            <p>
                this is friend bill index item
            </p>
            // <li>
            //     <Link  to={`/dashboard/${friend.id}`} >
            //      <span>{bill.description}</span>
            //     </Link>

            // </li>
        )
    }

}

export default FriendBillItem