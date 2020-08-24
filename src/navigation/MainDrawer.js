import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "../constants/Colors";

import MealFavTabs from "./MealFavTabs";
import FilterStack from "./FilterStack";

const MainDrawerNav = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <NavigationContainer>
      <MainDrawerNav.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
      >
        <MainDrawerNav.Screen
          name="MealsFav"
          component={MealFavTabs}
          options={{
            drawerLabel: "Meals & Favorites",
          }}
        />
        <MainDrawerNav.Screen
          name="Filter"
          component={FilterStack}
          options={{
            drawerLabel: "Filters",
          }}
        />
      </MainDrawerNav.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
