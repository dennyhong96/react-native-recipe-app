import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";

const MealStack = createStackNavigator();

export default () => (
  <MealStack.Navigator
    mode="modal" // Modal like transition
    initialRouteName="Categories"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "#fff" : Colors.primaryColor,
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff", // Title text color
    }}
  >
    <MealStack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={({ navigation }) => ({
        headerTitle: "Meal Categories",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={navigation.openDrawer}
            />
          </HeaderButtons>
        ),
      })}
    />
    <MealStack.Screen
      name="CategoriesMeals"
      component={CategoriesMealsScreen}
    />
    <MealStack.Screen name="Details" component={DetailsScreen} />
  </MealStack.Navigator>
);
