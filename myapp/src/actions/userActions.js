import { CONTACT_LISTALL_REQUEST, CONTACT_LISTALL_SUCCESS, CONTACT_LISTALL_FAIL, CONTACT_DETAILS_REQUEST, CONTACT_DETAILS_SUCCESS, CONTACT_DETAILS_FAIL, CONTACT_CREATE_REQUEST, CONTACT_CREATE_SUCCESS, CONTACT_CREATE_FAIL, CONTACT_DELETE_REQUEST, CONTACT_DELETE_SUCCESS, CONTACT_DELETE_FAIL, CONTACT_UPDATE_REQUEST, CONTACT_UPDATE_FAIL, CONTACT_UPDATE_SUCCESS } from "../constant/userConstant"
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

export const deleteContact = (id)  => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_DELETE_REQUEST })

        await axios.delete(`/api/contacts/${id}`)

        dispatch({ 
            type: CONTACT_DELETE_SUCCESS
        })

    } catch (error) {
        dispatch({ 
            type: CONTACT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateContact = (contact)  => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_UPDATE_REQUEST })

        const {data} = await axios.put(`/api/contacts/${contact._id} contact`)

        dispatch({ 
            type: CONTACT_UPDATE_SUCCESS, 
            payload: data
        })

        // dispatch({ 
        //     type: CONTACT_DETAILS_SUCCESS, 
        //     payload: data
        // })

    } catch (error) {
        dispatch({ 
            type: CONTACT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}