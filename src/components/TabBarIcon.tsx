import React from 'react';
import * as Icon from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface Props {
  name: string;
  focused: boolean;
}

const styles = StyleSheet.create({
  icon:{ marginBottom: -3 },
});

const TabBarIcon = ({ name, focused }: Props) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={styles.icon}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
