/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from "./screens/home/screens/HomeScreen";
import SignInScreen from "./screens/auth/screens/signInScreen";
import OnBoardingScreen from "./screens/auth/screens/onBoardingScreen";

import Main from "./navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {configureStore} from "./storage";

const store = configureStore();


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1,backgroundColor:"#fff"}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Main />
    </SafeAreaProvider>
   </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
