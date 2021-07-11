import * as UsersUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user =>({
    tyep: RECEIVE_USER,
    user
})

export const getUser = email => dispatch =>{(
    UsersUtil.searchUser(email)
        .then((user) => dispatch(receiveUser(user)))
)
}
