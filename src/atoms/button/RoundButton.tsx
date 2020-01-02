import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

interface Props {
  onPress: () => void;
  color?: string;
  label: string;
}

const RoundButton: React.FC<Props> = ({
  onPress,
  label,
  color = 'dodgerblue',
}: Props): JSX.Element => (
  <TouchableOpacity
    style={[styles.container, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export default RoundButton;
