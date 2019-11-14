export const dispatchUser = (data: any) => async (dispatch: any) => {
  dispatch({
    type: "fetch_user",
    payload: data
  });
};
