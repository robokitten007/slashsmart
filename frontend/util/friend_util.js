
export const addFriend = email=>(
    $.ajax({
        method: 'post',
        url: 'api/friends',
        data: {email} 
    })
)

export const removeFriend = (id) =>(
    $.ajax({
        method: 'delete',
        url: `api/friends/${id}`,
        data: {id}
    })
)

export const fetchFriends =()=>(
    $.ajax({
        method: 'get',
        url: 'api/friends'
    })
)