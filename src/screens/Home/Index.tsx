import React from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { BatLogo } from "../../components/BatLogo/Index";
import { BatButton } from "../../components/BatButton/Index";

import styles from "./style";

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
