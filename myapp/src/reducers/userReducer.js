import { USER_LISTALL_FAIL, USER_LISTALL_REQUEST, USER_LISTALL_SUCCESS } from "../constant/userConstant";

export const listAllUserReducer = (state = { contacts: [] }, action) => {
    switch (action.type) {
        case USER_LISTALL_REQUEST:
            return{ loading: true }
        
        case USER_LISTALL_SUCCESS:
            return{ loading: false, contacts: action.payload }
        
        case USER_LISTALL_FAIL:
            return{ loading: false, error: action.payload }
            
        default:
            return state
    }
}