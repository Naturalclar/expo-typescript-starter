import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View, Text, StyleSheet } from "react-native";
import { text } from "@storybook/addon-knobs";
import IconText from "./IconText";

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

storiesOf("molecules", module)
  .addDecorator(story => (
    <View style={styles.container}>
      <View style={styles.component}>{story()}</View>
      <Text>
        Componentが見やすい様にPaddingが敷かれています。この部分は端末には表示されません。
      </Text>
    </View>
  ))
  .add("IconText", () => (
    <IconText icon={text("icon", "check")}>
      {text("children", "ガンガンいこうぜ")}
    </IconText>
  ));
