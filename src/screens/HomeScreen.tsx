import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { RobotDev, RobotProd } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainerAndroid: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    elevation: 20,
  },
  tabBarInfoContainerIos: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const handleLearnMorePress = (): void => {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/guides/development-mode'
  );
};

const handleHelpPress = (): void => {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  );
};

const maybeRenderDevelopmentModeWarning = (): JSX.Element => {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled, your app will be slower but you can use
        useful development tools.
        {learnMoreButton}
      </Text>
    );
  }
  return (
    <Text style={styles.developmentModeText}>
      You are not in development mode, your app will run at full speed.
    </Text>
  );
};

const HomeScreen = (): JSX.Element => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.welcomeContainer}>
        <Image
          source={__DEV__ ? RobotDev : RobotProd}
          style={styles.welcomeImage}
        />
      </View>

      <View style={styles.getStartedContainer}>
        {maybeRenderDevelopmentModeWarning()}

        <Text style={styles.getStartedText}>Get started by opening</Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        >
          <MonoText style={styles.codeHighlightText}>
            screens/HomeScreen.js
          </MonoText>
        </View>

        <Text style={styles.getStartedText}>
          Change this text and your app will automatically reload.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText}>
            Help, it didn’t automatically reload!
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View
      style={Platform.select({
        ios: styles.tabBarInfoContainerIos,
        // @ts-ignore
        android: styles.tabBarInfoContainerAndroid,
      })}
    >
      <Text style={styles.tabBarInfoText}>
        This is a tab bar. You can edit it in:
      </Text>

      <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
        <MonoText style={styles.codeHighlightText}>
          navigation/MainTabNavigator.js
        </MonoText>
      </View>
    </View>
  </View>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
