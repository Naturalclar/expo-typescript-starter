import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "dodgerblue",
    color: "white"
  }
});

interface Props {
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({ children, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>{children}</Text>
  </TouchableOpacity>
);

export default Button;
