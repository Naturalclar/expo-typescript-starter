import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View, Text, StyleSheet } from "react-native";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import RoundButton from "./RoundButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "dodgerblue"
  },
  component: {
    flex: 1,
    backgroundColor: "white"
  }
});

storiesOf("atoms", module)
  .addDecorator(story => (
    <View style={styles.container}>
      <View style={styles.component}>{story()}</View>
      <Text>
        Componentが見やすい様にPaddingが敷かれています。この部分は端末には表示されません。
      </Text>
    </View>
  ))
  .add("RoundButton", () => (
    <View>
      <RoundButton
        label={text("label", "RoundButton")}
        color={text("color", "dodgerblue")}
        onPress={action("onPress")}
      />
    </View>
  ));
