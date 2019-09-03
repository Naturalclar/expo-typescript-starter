import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RenderFunction } from "@storybook/react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "aliceblue"
  },
  component: {
    flex: 1,
    backgroundColor: "white"
  }
});

export const StorybookContainer = (story: RenderFunction) => (
  <View style={styles.container}>
    <View style={styles.component}>{story()}</View>
    <Text>Padding is here for clarity when displaying on storybook.</Text>
    <Text>This part will not be shown on the actual app.</Text>
  </View>
);
