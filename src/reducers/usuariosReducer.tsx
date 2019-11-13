const INITIAL_STATE = {
  usuario: [],
  api: {}
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "traer_usuario":
      return { ...state, usuario: action.payload };
    default:
      return state;
  }
};
