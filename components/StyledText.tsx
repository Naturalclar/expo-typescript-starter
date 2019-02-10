import React from "react";
import { Text, TextStyle } from "react-native";

interface Props {
  style?: TextStyle;
}

export class MonoText extends React.Component<Props> {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "space-mono" }]}
      />
    );
  }
}
