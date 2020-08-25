import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavoriteScreen = () => {
  const favoriteMeals = useSelector(
    ({ meals: { favoriteMeals } }) => favoriteMeals
  );
  return <MealList meals={favoriteMeals} />;
};

export default FavoriteScreen;
