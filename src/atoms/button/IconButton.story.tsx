import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View, Text, StyleSheet } from "react-native";
import { action } from "@storybook/addon-actions";
import { text, number } from "@storybook/addon-knobs";
import IconButton from "./IconButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "dodgerblue"
  },
  component: {
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
  .add("IconButton", () => (
    <IconButton
      icon={text("icon", "close")}
      onPress={action("onPress")}
      color={text("color", "gray")}
      size={number("size", 20)}
    />
  ));
