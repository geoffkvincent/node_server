import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import auth from './auth'

const rootReducer =  combineReducers({
  auth,
})

export default rootReducer