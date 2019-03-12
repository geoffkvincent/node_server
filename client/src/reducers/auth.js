import axios from 'axios'

const FETCH_USER = 'FETCH_USER'

export const fetchUser = () => {
  return (dispatch) => {
    axios.get('/api/current_user')
    .then (({data}) => dispatch({type: FETCH_USER, payload: data}))
  }
}

export default function(state = {}, action) {
  console.log(action)
  switch(action.type) {
    default:
      return state
  }
}