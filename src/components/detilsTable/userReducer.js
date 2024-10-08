const initialState = {
    users:[]
}

function userReducerFunction(state=initialState,action){

    switch (action.type){
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload // directly set the fetched users
            }
        default:
            return state
    }
}
export default userReducerFunction