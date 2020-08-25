import { TOGGLE_FAVORITE, SET_FILTERS } from "./actionTypes";

export const toggleFavorite = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_FAVORITE,
    payload: id,
  });
};

export const setFilters = (filterSettings) => (dispatch) => {
  dispatch({
    type: SET_FILTERS,
    payload: filterSettings,
  });
};
