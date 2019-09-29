import axios from "axios";
export const traerTodos = () => async (dispatch: any) => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: "traer_usuarios",
    payload: resp.data
  });
};
