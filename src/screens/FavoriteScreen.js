import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";

const FavoriteScreen = () => {
  const favoriteMeals = useSelector(
    ({ meals: { favoriteMeals } }) => favoriteMeals
  );

  if (!favoriteMeals || !favoriteMeals.length) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found, start adding some!</DefaultText>
      </View>
    );
  }
  return <MealList meals={favoriteMeals} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
