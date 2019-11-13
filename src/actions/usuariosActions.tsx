import axios from "axios";
export const traerTodos = () => async (dispatch: any) => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  dispatch({
    type: "traer_usuario",
    payload: resp.data
  });
};
