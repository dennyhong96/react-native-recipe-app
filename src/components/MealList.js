import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealItem from "../components/MealItem";

const MealList = ({ meals }) => {
  const navigation = useNavigation();

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

export default MealList;
