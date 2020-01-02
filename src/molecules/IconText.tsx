import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// @ts-ignore
import Icon from '@expo/vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  icon: string;
  children: string;
  iconColor?: string;
  textColor?: string;
}

const IconText: React.FC<Props> = ({
  icon,
  children,
  iconColor = 'dodgerBlue',
  textColor = 'gray',
}: Props): JSX.Element => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Icon name={icon} color={iconColor} />
    </View>
    <Text style={{ color: textColor }}>{children}</Text>
  </View>
);

export default IconText;
