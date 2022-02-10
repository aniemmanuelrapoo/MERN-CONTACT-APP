import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactDetailsReducer, listAllContactReducer } from './reducers/userReducer'


const reducer = combineReducers({
    listAllContact: listAllContactReducer,
    contactDetails: contactDetailsReducer
})

const initialState = {
    
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store