import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View, StyleSheet } from "react-native";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import DismissableDialog from "./DismissableDialog";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  component: { flex: 1, justifyContent: "center", alignItems: "center" }
});

storiesOf("molecules", module)
  .addDecorator(story => (
    <View style={styles.container}>
      <View style={styles.component}>{story()}</View>
    </View>
  ))
  .add("DismissableDialog", () => (
    <DismissableDialog
      title="症例投稿のガイドライン"
      body="１Dに画像を投稿する時は、利用規約をよくお読みの上、以下の点にご注意ください"
      onPressOk={action("onPressOk")}
      onRequestClose={action("onRequestClose")}
      buttonText={text("buttonText", "同意してシェア")}
    />
  ));
