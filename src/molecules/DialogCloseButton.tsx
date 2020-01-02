import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../atoms/button/IconButton';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 2,
  },
});

interface Props {
  onPress: () => void;
}

const DialogCloseButton: React.FC<Props> = ({
  onPress,
}: Props): JSX.Element => (
  <View style={styles.container}>
    <IconButton icon="close" onPress={onPress} />
  </View>
);

export default DialogCloseButton;
