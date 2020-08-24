import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import DetailsScreen from "../screens/DetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const FavStack = createStackNavigator();

export default () => (
  <FavStack.Navigator
    initialRouteName="Favorite"
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
    <FavStack.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={({ navigation }) => ({
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
    <FavStack.Screen name="Details" component={DetailsScreen} />
  </FavStack.Navigator>
);
