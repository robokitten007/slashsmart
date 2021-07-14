
export const fetchUsers =()=> (
    $.ajax({
        mehtod: 'get',
        url: 'api/users'
    })
)