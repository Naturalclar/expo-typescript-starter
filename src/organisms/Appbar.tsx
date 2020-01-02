import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
});

interface Props {
  title: string;
  subtitle?: string;
  onPressBack: () => void;
  onPressAction: () => void;
}

const AppbarExample: React.FC<Props> = ({
  title,
  subtitle = '',
  onPressBack,
  onPressAction,
}: Props): JSX.Element => (
  <Appbar style={styles.container}>
    <Appbar.BackAction color="white" onPress={onPressBack} />
    <Appbar.Content title={title} subtitle={subtitle} />
    <Appbar.Action icon="delete" onPress={onPressAction} />
  </Appbar>
);

export default AppbarExample;
