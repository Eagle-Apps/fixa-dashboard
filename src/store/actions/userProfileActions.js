import * as api from "../api/index.js";
export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProfile(id);

    dispatch({ type: "GET_PROFILE", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};
