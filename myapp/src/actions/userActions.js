import { CONTACT_LISTALL_REQUEST, CONTACT_LISTALL_SUCCESS, CONTACT_LISTALL_FAIL, CONTACT_DETAILS_REQUEST, CONTACT_DETAILS_SUCCESS, CONTACT_DETAILS_FAIL, CONTACT_CREATE_REQUEST, CONTACT_CREATE_SUCCESS, CONTACT_CREATE_FAIL } from "../constant/userConstant"
import axios from 'axios'

export const listContacts = ()  => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_LISTALL_REQUEST })

        const {data} = await axios.get('/api/contacts')

        dispatch({ 
            type: CONTACT_LISTALL_SUCCESS, 
            payload: data 
        })

    } catch (error) {
        dispatch({ 
            type: CONTACT_LISTALL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
            
        })
    }
}

export const contactDetail = (id)  => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_DETAILS_REQUEST })

        const {data} = await axios.get(`/api/contacts/${id}`)

        dispatch({ 
            type: CONTACT_DETAILS_SUCCESS, 
            payload: data 
        })

    } catch (error) {
        dispatch({ 
            type: CONTACT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const createContact = (name, email, phone, username, website, catchPhrase, companyName)  => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_CREATE_REQUEST })

        const {data} = await axios.post(`/api/contacts`, {name, email, phone, username, website, company:{catchPhrase: catchPhrase, name: companyName}})

        dispatch({ 
            type: CONTACT_CREATE_SUCCESS, 
            payload: data
        })

    } catch (error) {
        dispatch({ 
            type: CONTACT_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}