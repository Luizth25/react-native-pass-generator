import React from "react";
import { Image, Text } from "react-native";

import batLogo from "../../../assets/bat-logo.png";

import { styles } from "./styles";

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>Bat Pass Generator</Text>
      <Image style={styles.image} source={batLogo} />
    </>
  );
}
