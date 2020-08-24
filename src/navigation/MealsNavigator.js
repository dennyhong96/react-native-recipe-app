import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal" // Modal like transition
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "ios" ? "#fff" : Colors.primaryColor,
          },
          headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff", // Title text color
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ headerTitle: "Meal Categories" }}
        />
        <Stack.Screen
          name="CategoriesMeals"
          component={CategoriesMealsScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
