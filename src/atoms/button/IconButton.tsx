import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// @ts-ignore Storybook works by this import, but types are not provided
import Icon from '@expo/vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  icon: string;
  onPress: () => void;
  color?: string;
  size?: number;
}

const IconButton: React.FC<Props> = ({
  icon,
  onPress,
  color = 'gray',
  size = 20,
}: Props): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name={icon} color={color} size={size} />
  </TouchableOpacity>
);

export default IconButton;
