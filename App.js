import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./src/navigation/MealsNavigator";

const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.error(error)}
      />
    );
  }

  return <MealsNavigator />;
}
