import { actionTypes } from './actionTypes';

export const dispatchUser = (data: any) => async (dispatch: any) => {
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: data
  });
};

export const updateToken = (token: string) => async (dispatch: any) => {
  dispatch({
    type: actionTypes.UPDATE_TOKEN,
    payload: token
  })
}