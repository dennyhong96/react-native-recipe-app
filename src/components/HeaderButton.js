import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const _HeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "ios" ? Colors.primaryColor : "#fff"}
    />
  );
};

export default _HeaderButton;
