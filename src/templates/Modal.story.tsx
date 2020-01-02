import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Modal from './Modal';

const styles = StyleSheet.create({
  modalWindow: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

storiesOf('React Native Paper', module).add('Modal', () => (
  <Modal visible={boolean('visible', true)}>
    <View style={styles.modalWindow}>
      <Text>Hello World!</Text>
    </View>
  </Modal>
));
