import axios from 'axios'

const FETCH_USER = 'FETCH_USER'

export const fetchUser = () => {
  return (dispatch) => {
    axios.get('/api/current_user')
    .then (({data}) => dispatch({type: FETCH_USER, auth: data}))
  }
}

export const handleToken = (token) => {
  return (dispatch) => {
    axios.post('/api/stripe', token)
    .then( ({data}) => dispatch({ type: FETCH_USER, auth: data}))
  }
}

export default ( state = null, action ) => {
  switch(action.type) {
    case FETCH_USER:
      return action.auth || false
    default:
      return state
  }
}