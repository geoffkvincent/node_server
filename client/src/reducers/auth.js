import axios from 'axios'

const FETCH_USER = 'FETCH_USER'

export const fetchUser = () => {
  axios.get('/api/current_user')
}

export default function(state = {}, action) {
  switch(action.type) {
    default:
      return state
  }
}