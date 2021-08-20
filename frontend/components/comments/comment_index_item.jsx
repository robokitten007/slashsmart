import React from 'react';


class CommentIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.showdelete = 'no-show'

    }

    handleClick(e){
        e.preventDefault();
        // e.stopPropagation();
        if(confirm('Are you sure you want to remove this comment?')){
            this.props.deleteComment(this.props.comment.id)
        }
    }

    render(){
        const {currentUser, comment, deleteComment} = this.props
        if(currentUser.id === comment.author_id){
            this.showdelete= 'show'
        }
        return (
        <li className='comment-item'>
            <span className='comment-left'>   
                    <span className='comment-author'>{comment.author} </span> on <span> {comment.created_at.slice(0,10)}</span>
                    <p className='comment-body'>{comment.body}</p>
            </span>
            <span className={this.showdelete}>
                <div id='close-y' onClick={this.handleClick}>x</div>
            </span>
        </li>
        )
        
    }
}

export default CommentIndexItem