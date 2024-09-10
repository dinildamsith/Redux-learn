const initialState={
    person:[]
}

function  Reducer(state=initialState,action){
    switch (action.type){
        case 'SHOW_DETAILS':
            return {
                ...state,
                person:[...state.person,action.payload]
            }
        default:
            return state

    }
}

export default Reducer