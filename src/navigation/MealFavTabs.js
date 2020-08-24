import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import MealsStack from "./MealsStack";
import FavStack from "./FavStack";

const Tab = createBottomTabNavigator();
const MTab = createMaterialBottomTabNavigator();

export default () =>
  Platform.OS === "ios" ? (
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsStack}
        tabBarOptions={{
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavStack}
        tabBarOptions={{
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
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
        component={MealsStack}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <MTab.Screen
        name="Fav"
        component={FavStack}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
          tabBarLabel: "Favorite",
        }}
      />
    </MTab.Navigator>
  );
