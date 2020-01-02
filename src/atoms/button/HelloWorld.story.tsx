import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View, Text } from 'react-native';

storiesOf('atoms', module).add('Hello World', () => (
  <View>
    <Text>Hello Typescript!</Text>
  </View>
));
