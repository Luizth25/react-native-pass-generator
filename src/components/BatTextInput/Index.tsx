import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

interface IBatTextInputProps {
  pass: string;
}

export function BatTextInput({ pass }: IBatTextInputProps) {
  return <TextInput style={styles.input} placeholder="password" value={pass} />;
}
