import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import * as Clipboard from "expo-clipboard";

import { BatTextInput } from "../BatTextInput/Index";

import generatePass from "../../services/passwordService";

import { styles } from "./styles";

export function BatButton() {
  const [pass, setPass] = useState<string>("");

  const handleGenerateButton = () => {
    const generateToken = generatePass();
    setPass(generateToken);
  };

  const handleCopyButton = () => {
    Clipboard.setStringAsync(pass);
  };

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>📄 COPY</Text>
      </Pressable>
    </>
  );
}
