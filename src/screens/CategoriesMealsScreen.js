import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesMealsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesMealsScreen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Replace to details"
        onPress={() => navigation.replace("Details")}
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

export default CategoriesMealsScreen;
