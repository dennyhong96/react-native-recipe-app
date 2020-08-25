import { MEALS } from "../../data/dummy";
import { TOGGLE_FAVORITE } from "../actions/actionTypes";

const INITIAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FAVORITE:
      if (state.favoriteMeals.find((meal) => meal.id === payload)) {
        console.log("already has");
        // Remove fav
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== payload
          ),
        };
      }
      // Add fav
      console.log("no has");
      return {
        ...state,
        favoriteMeals: [
          ...state.favoriteMeals,
          state.meals.find((meal) => meal.id === payload),
        ],
      };
    default:
      return state;
  }
};
