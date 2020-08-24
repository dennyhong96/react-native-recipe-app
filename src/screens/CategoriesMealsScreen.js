import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy";

const CategoriesMealsScreen = ({ navigation, route }) => {
  navigation.setOptions({
    headerTitle: route.params.category.title,
  });

  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.category.id)
  );

  return <MealList meals={meals} />;
};

export default CategoriesMealsScreen;
