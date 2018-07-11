import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return async (dispatch) => {
         /*
            When the promise is resolved, we will dispatch the action, which
            wiil be sent to all the reducers
        */ 
       let token = localStorage.getItem('token');
        let response = await axios.get('http://localhost:8080/user/here', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
                // [{"key":"Content-Type","value":"application/x-www-form-urlencoded","description":"","warning":""}]
            }
        });
        // console.log(response.data);
        dispatch({type: FETCH_USER, payload: response.data});
    }
};
