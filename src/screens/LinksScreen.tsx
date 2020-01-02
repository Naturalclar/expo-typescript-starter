import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// @ts-ignore
import { ExpoLinksView } from '@expo/samples';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const LinksScreen = (): JSX.Element => (
  <ScrollView style={styles.container}>
    {/* Go ahead and delete ExpoLinksView and replace it with your
     * content, we just wanted to provide you with some helpful links */}
    <ExpoLinksView />
  </ScrollView>
);

LinksScreen.navigationOptions = {
  title: 'Links',
};

export default LinksScreen;
