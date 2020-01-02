import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ListItem } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const data = new Array(10)
  .fill(0)
  .map((_, i) => ({ id: i, name: `Hello RNE ${i}` }));

storiesOf('atoms', module).add('Hello RNE', () => (
  <View style={styles.container}>
    {data.map(item => (
      <ListItem key={item.id} title={item.name} chevron badge={{ value: 3 }} />
    ))}
  </View>
));
