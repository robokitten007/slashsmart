
export const searchUser =(email)=> (
    $.ajax({
        mehtod: 'get',
        url: 'api/users',
        data: {email}
    })
)