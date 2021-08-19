export const fetchComments = () =>{
    return $.ajax({
        method: 'get',
        url: `/api/comments`
    })
}

export const fetchComment = (id) =>{
    return $.ajax({
        method: 'get',
        url: `/api/comments/${id}`
    })
}

export const createComment =(comment) => {
    return $.ajax({
        method: 'post',
        url: `/api/comments`,
        data: {comment}
    })
}

export const deleteComment = (id) =>{
    return $.ajax({
        method: 'delete',
        url: `/api/comments/${id}`
    })
}