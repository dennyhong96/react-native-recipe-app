import { MEALS } from "../../data/dummy";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/actionTypes";

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
        // Remove fav
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== payload
          ),
        };
      }
      // Add fav
      return {
        ...state,
        favoriteMeals: [
          ...state.favoriteMeals,
          state.meals.find((meal) => meal.id === payload),
        ],
      };
    case SET_FILTERS:
      const filteredMeals = state.meals.filter((meal) => {
        if (payload.isGluttenFree && !meal.isGluttenFree) {
          return false;
        }
        if (payload.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (payload.isVegan && !meal.isVegal) {
          return false;
        }
        if (payload.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};
