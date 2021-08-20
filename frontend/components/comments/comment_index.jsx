import React from 'react';

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchComments()
    }

   
fetchBillComments(){
    const {bill, comments} = this.props;
    let billComments = []
    
    comments.forEach((comment)=>{
        if(comment.bill_id === bill.id){
            billComments.push(comment)
        }
    });
    return billComments;
}


    render(){
        const {currentUser, bill, createComment, deleteComment} = this.props
        // console.log(bill)
    
        return (
            <div>
                {/* <h1 className='far fa-comment'>Notes and Comments</h1> */}

            </div>
    
        )
    }
}

export default CommentIndex
