/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import codePush from 'react-native-code-push';

import {Colors} from 'react-native/Libraries/NewAppScreen';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Hello, Edward here</Text>
    </SafeAreaView>
  );
}

export default codePush(codePushOptions)(App);
