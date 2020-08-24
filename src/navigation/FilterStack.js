import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import FiltersScreen from "../screens/FiltersScreen";

const FilterStack = createStackNavigator();

export default () => (
  <FilterStack.Navigator>
    <FilterStack.Screen
      name="Filter"
      component={FiltersScreen}
      options={({ navigation, route }) => ({
        headerTitle: "Filter Meals",
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
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={navigation.openDrawer}
            />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Save"
              iconName="ios-save"
              onPress={() => {
                // "save" is stored into param in FilterScreen
                route.params.save();
              }}
            />
          </HeaderButtons>
        ),
      })}
    />
  </FilterStack.Navigator>
);
