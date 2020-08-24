import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        item={item}
        onSelect={() =>
          navigation.navigate("CategoriesMeals", { category: item })
        }
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
