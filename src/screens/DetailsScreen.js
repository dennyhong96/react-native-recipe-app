import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../redux/actions/meals";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = ({ children }) => (
  <View style={styles.listItem}>
    <DefaultText>{children}</DefaultText>
  </View>
);

const DetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const favoriteMeals = useSelector(
    ({ meals: { favoriteMeals } }) => favoriteMeals
  );

  navigation.setOptions({
    headerTitle: route.params.item.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={
            favoriteMeals.find((meal) => meal.id === route.params.item.id)
              ? `ios-star`
              : `ios-star-outline`
          }
          onPress={() => {
            dispatch(toggleFavorite(route.params.item.id));
          }}
        />
      </HeaderButtons>
    ),
  });

  return (
    <ScrollView>
      <Image
        source={{ uri: route.params.item.imageUrl }}
        style={styles.image}
      />
      <View style={styles.details}>
        <DefaultText>{route.params.item.duration}m</DefaultText>
        <DefaultText>{route.params.item.complexity.toUpperCase()}</DefaultText>
        <DefaultText>
          {route.params.item.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {route.params.item.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {route.params.item.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default DetailsScreen;
