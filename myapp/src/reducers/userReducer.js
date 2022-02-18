import { CONTACT_LISTALL_REQUEST, CONTACT_LISTALL_SUCCESS, CONTACT_LISTALL_FAIL, CONTACT_DETAILS_REQUEST, CONTACT_DETAILS_SUCCESS, CONTACT_DETAILS_FAIL, CONTACT_CREATE_REQUEST, CONTACT_CREATE_SUCCESS, CONTACT_CREATE_FAIL, CONTACT_CREATE_RESET, CONTACT_DELETE_REQUEST, CONTACT_DELETE_SUCCESS, CONTACT_DELETE_FAIL } from "../constant/userConstant";

export const listAllContactReducer = (state = { contacts: [] }, action) => {
    switch (action.type) {
        case CONTACT_LISTALL_REQUEST:
            return{ loading: true }
        
        case CONTACT_LISTALL_SUCCESS:
            return{ loading: false, contacts: action.payload }
        
        case CONTACT_LISTALL_FAIL:
            return{ loading: false, error: action.payload }
            
        default:
            return state
    }
}

export const contactDetailsReducer = (state = { contact: { company: [] } }, action) => {
    switch (action.type) {
        case CONTACT_DETAILS_REQUEST:
            return{ loading: true }
        
        case CONTACT_DETAILS_SUCCESS:
            return{ loading: false, contact: action.payload }
        
        case CONTACT_DETAILS_FAIL:
            return{ loading: false, error: action.payload }
            
        default:
            return state
    }
}

export const contactCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_CREATE_REQUEST:
            return{ loading: true }
        
        case CONTACT_CREATE_SUCCESS:
            return{ loading: false, success: true, contact: action.payload }
        
        case CONTACT_CREATE_FAIL:
            return{ loading: false, error: action.payload }
            
        case CONTACT_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const contactDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_DELETE_REQUEST:
            return{ loading: true }
        
        case CONTACT_DELETE_SUCCESS:
            return{ loading: false, success: true }
        
        case CONTACT_DELETE_FAIL:
            return{ loading: false, error: action.payload }
            
        default:
            return state
    }
}