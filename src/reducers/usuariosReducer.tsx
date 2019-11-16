import { actionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {},
  api: {}
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return { ...state, user: action.payload };
    case actionTypes.FETCH_API:
      return { ...state, api: action.payload };
    case actionTypes.UPDATE_TOKEN:
      localStorage.setItem('google_token', action.payload);
      const user = state.user;
      return {...state, user: { ...user, token: action.payload } };
    default:
      return state;
  }
};
