import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy";

const favMeals = MEALS.filter((meal) => ["m1", "m2", "m3"].includes(meal.id));

const FavoriteScreen = () => {
  return <MealList meals={favMeals} />;
};

export default FavoriteScreen;
