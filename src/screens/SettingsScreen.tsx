import React from 'react';
// @ts-ignore
import { ExpoConfigView } from '@expo/samples';

const SettingsScreen = (): JSX.Element => <ExpoConfigView />;

SettingsScreen.navigationOptions = {
  title: 'app.json',
};

export default SettingsScreen;
