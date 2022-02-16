import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactCreateReducer, contactDetailsReducer, listAllContactReducer } from './reducers/userReducer'


const reducer = combineReducers({
    listAllContact: listAllContactReducer,
    contactDetails: contactDetailsReducer,
    contactCreate: contactCreateReducer
})

const initialState = {
    
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store