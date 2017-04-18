import axios from 'axios';

export function signupRequest(userData) {
  return dispatch => axios.post('/api/users', userData);
}
