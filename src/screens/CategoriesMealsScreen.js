import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy";

const CategoriesMealsScreen = ({ navigation, route }) => {
  navigation.setOptions({
    headerTitle: route.params.category.title,
  });

  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.category.id)
  );

  const renderMealItems = ({ item }) => (
    <MealItem
      item={item}
      onSelectMeal={() => {
        navigation.navigate("Details", { item });
      }}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItems}
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
