import React from 'react'

class OverviewItem extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        const {currentUser, friend, bills} = this.props
      
        return (
            <div>
                <h1>{friend.friend}</h1>
            </div>
        )
    }
}

export default OverviewItem