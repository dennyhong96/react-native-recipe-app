import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoratesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoratesScreen</Text>
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

export default FavoratesScreen;
