import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

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

  if (!meals.length) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList meals={meals} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
