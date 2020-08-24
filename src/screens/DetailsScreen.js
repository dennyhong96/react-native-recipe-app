import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to details again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
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

export default DetailsScreen;
