import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "blue",
    borderRadius: 50,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: Props) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
