import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const MealStack = createStackNavigator();
const FavStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MTab = createMaterialBottomTabNavigator();

const MealNavigator = () => (
  <MealStack.Navigator
    mode="modal" // Modal like transition
    initialRouteName="Categories"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "#fff" : Colors.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff", // Title text color
    }}
  >
    <MealStack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ headerTitle: "Meal Categories" }}
    />
    <MealStack.Screen
      name="CategoriesMeals"
      component={CategoriesMealsScreen}
    />
    <MealStack.Screen name="Details" component={DetailsScreen} />
  </MealStack.Navigator>
);

const FavNavigator = () => (
  <FavStack.Navigator
    initialRouteName="Favorite"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "#fff" : Colors.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff", // Title text color
    }}
  >
    <FavStack.Screen name="Favorite" component={FavoriteScreen} />
    <FavStack.Screen name="Details" component={DetailsScreen} />
  </FavStack.Navigator>
);

const MainTab =
  Platform.OS === "ios" ? (
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
          tabBarLabel: "Favorite",
        }}
      />
    </Tab.Navigator>
  ) : (
    <MTab.Navigator
      shifting={true}
      initialRouteName="Meals"
      barStyle={{ backgroundColor: Colors.primaryColor }}
    >
      <MTab.Screen
        name="Meals"
        component={MealNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <MTab.Screen
        name="Fav"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
          tabBarLabel: "Favorite",
        }}
      />
    </MTab.Navigator>
  );

const MealsNavigator = () => {
  return <NavigationContainer>{MainTab}</NavigationContainer>;
};

export default MealsNavigator;
