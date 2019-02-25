import * as React from "react";
import { View, Text } from "react-native";

interface Props {
  children: React.ReactChild;
}

const HelloWorld = ({ children }: Props) => (
  <View>
    <Text>{children}</Text>
  </View>
);

export default HelloWorld;
