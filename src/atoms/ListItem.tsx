import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  name: { fontWeight: 'bold' },
  content: {},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    marginRight: 8,
  },
});

type Props = {
  onPress: () => void;
  name: string;
  content: string;
};

const ListItem: React.FC<Props> = ({
  onPress,
  name,
  content,
}: Props): JSX.Element => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ListItem;
