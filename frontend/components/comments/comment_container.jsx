import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, fetchComment, deleteComment, createComment } from '../../actions/comment_actions'


const mSTP = (state, ownProps) =>{
    let billComments=[]
    let comments = Object.values(state.entities.comments)
    let bill = ownProps.bill
    comments.forEach((comment)=>{
        if(comment.bill_id === bill.id){
            billComments.push(comment)
        }
    });

    return ({
        currentUser: state.entities.users[state.session.id],
        // comments: Object.values(state.entities.comments),
        bill: ownProps.bill,
        comments: billComments
    })
}



const mDTP = dispatch =>({
    fetchComments:()=>dispatch(fetchComments()),
    fetchComment:(id)=>dispatch(fetchComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (comment) => dispatch(createComment(comment))
})


export default connect(mSTP, mDTP)(CommentIndex)
