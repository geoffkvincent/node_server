import axios from 'axios'

const FETCH_USER = 'FETCH_USER'

export const fetchUser = () => {
  return (dispatch) => {
    axios.get('/api/current_user')
    .then (({data}) => dispatch({type: FETCH_USER, auth: data}))
  }
}

export default ( state = {}, action ) => {
  switch(action.type) {
    case FETCH_USER:
      return action.auth
    default:
      return state
  }
}