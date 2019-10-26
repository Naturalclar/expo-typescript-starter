import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

type Props = { onPress: () => void };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  }
});

const OsakaButton: React.FC<Props> = ({ onPress }: Props): JSX.Element => (
  <TouchableHighlight onPress={() => {}}>
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Hello Osaka!</Text>
    </View>
  </TouchableHighlight>
);

export default OsakaButton;
