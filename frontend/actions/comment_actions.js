import * as CommentsUtil from '../util/comment_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS ='RECEIVE_COMMENT_ERRORS'
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS'

const receiveComments = comments =>({
    type: RECEIVE_COMMENTS,
    comments
})
const receiveComment = comment =>({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (id) =>({
    type: REMOVE_COMMENT,
    id
})

const commentErrors =(errors) =>({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

const clearCommentErrors = ()=>{
    return {
        type:CLEAR_COMMENT_ERRORS  
    }
}

export const fetchComments = () => dispatch =>(
    CommentsUtil.fetchComments()
        .then(comments => (dispatch(receiveComments(comments))),
        err => dispatch(commentErrors(err.responseJSON)))

)

export const fetchComment = (id) => dispatch=>(
    CommentsUtil.fetchComment(id)
        .then(comment => (dispatch(receiveComment(comment))),
        err =>dispatch(commentErrors(err.responseJSON)))
)


export const deleteComment =(id) =>dispatch=>(
    CommentsUtil.deleteComment(id)
        .then((id) => (dispatch(removeComment(id))),
        err =>dispatch(commentErrors(err.responseJSON)))
)

export const createComment =(comment) => dispatch =>(
    CommentsUtil.createComment(comment)
        .then(comment =>(dispatch(receiveComment(comment))),
        err => dispatch(err.responseJSON))
)