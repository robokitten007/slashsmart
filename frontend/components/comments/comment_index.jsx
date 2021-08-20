import React from 'react';
import CommentIndexItem from './comment_index_item';
import CreateCommentContainer from './create_comment_container'
class CommentIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchComments()
    }

   
// fetchBillComments(){
//     const {bill, comments} = this.props;
//     let billComments = []
    
//     comments.forEach((comment)=>{
//         if(comment.bill_id === bill.id){
//             billComments.push(comment)
//         }
//     });
//     return billComments;
// }


    render(){
        const {currentUser, bill, comments, deleteComment} = this.props
      
    
        return (
            <div>
                <ul>
            {comments.map(((comment)=>(
                <CommentIndexItem 
                    key={comment.id}
                    currentUser={currentUser}
                    comment ={comment}
                    deleteComment = {deleteComment}
                />
            )))}
                </ul>
              {/* <button>create comment </button> */}
                <CreateCommentContainer bill={bill}/>
            </div>
    
        )
    }
}

export default CommentIndex
