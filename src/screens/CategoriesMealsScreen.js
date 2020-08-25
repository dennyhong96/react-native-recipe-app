import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoriesMealsScreen = ({ navigation, route }) => {
  const filteredMeals = useSelector(
    ({ meals: { filteredMeals } }) => filteredMeals
  );

  navigation.setOptions({
    headerTitle: route.params.category.title,
  });

  const meals = filteredMeals.filter((meal) =>
    meal.categoryIds.includes(route.params.category.id)
  );

  return <MealList meals={meals} />;
};

export default CategoriesMealsScreen;
