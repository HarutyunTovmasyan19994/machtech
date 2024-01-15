import {
    SEND_BOX,
    SEND_SIZE,
    EDIT_BOX,
    SYNC_TODOS,
    DELETE_BOX
} from "../action/action";


const initialState = {
    cup: [],
    box: {},
    EditeBox: false
}


const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case(SEND_SIZE):
            return {...state, cup: [...state.cup, action.payload]}
        case (SEND_BOX):
            return {...state, box: action.payload}
        case (EDIT_BOX):
            return {...state, EditeBox: action.payload}
        case SYNC_TODOS:
            return {...state, cup: action.payload, EditeBox: false}
        case  DELETE_BOX:
            return {...state,cup:state.cup.filter(user=>user.id !== action.payload)}
        default:
            return state

    }
})
export default reducer
