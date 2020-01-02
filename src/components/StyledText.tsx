import * as React from 'react';
import { Text, TextStyle } from 'react-native';

interface Props {
  style?: TextStyle;
  children: React.ReactChild;
}

export const MonoText = ({ style, ...rest }: Props) => {
  return <Text {...rest} style={[style]} />;
};
