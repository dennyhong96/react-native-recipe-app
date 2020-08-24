import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Go to categories meals"
        onPress={() => navigation.navigate("CategoriesMeals")}
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

export default CategoriesScreen;
