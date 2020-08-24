import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Switch } from "react-native-paper";

import Colors from "../constants/Colors";

const FilterSwitch = ({ label, value, onChange }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Platform.OS === "ios" ? undefined : Colors.primaryColor}
      value={value}
      onValueChange={onChange}
    />
  </View>
);

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten Free"
        value={isGlutenFree}
        onChange={() => setIsGlutenFree((prev) => !prev)}
      />
      <FilterSwitch
        label="Lactose Free"
        value={isLactoseFree}
        onChange={() => setIsLactoseFree((prev) => !prev)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={() => setIsVegan((prev) => !prev)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={() => setIsVegetarian((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FilterScreen;
