import { TOGGLE_FAVORITE } from "./actionTypes";

export const toggleFavorite = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_FAVORITE,
    payload: id,
  });
};
