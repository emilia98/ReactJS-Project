import { FETCH_USER} from '../actions/types';

export default function (state, action) {
  state = state || null;
  
  switch (action.type) {
    case FETCH_USER: {
      return action.payload || false;
    }
    default: {
      return state;
    }
  }
}
