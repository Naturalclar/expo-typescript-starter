import * as React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

storiesOf("atoms", module).add("Button", () => (
  <View style={styles.container}>
    <Button onPress={() => {}}>Hello World!</Button>
  </View>
));
