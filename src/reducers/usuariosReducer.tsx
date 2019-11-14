const INITIAL_STATE = {
  user: {},
  api: {}
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "fetch_user":
      return { ...state, user: action.payload };
    case "fetch_api":
      return { ...state, api: action.payload };
    default:
      return state;
  }
};
