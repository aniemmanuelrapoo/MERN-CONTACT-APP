import { USER_LISTALL_FAIL, USER_LISTALL_REQUEST, USER_LISTALL_SUCCESS } from "../constant/userConstant"
import axios from 'axios'

export const listUsers = ()  => async (dispatch) => {
    try {
        dispatch({ type: USER_LISTALL_REQUEST })

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({ 
            type: USER_LISTALL_SUCCESS, 
            payload: data 
        })

    } catch (error) {
        dispatch({ 
            type: USER_LISTALL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}