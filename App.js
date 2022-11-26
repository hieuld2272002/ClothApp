import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootNavigation from './src/Navigations/RootNavigation';
import {Color} from './src/global/StyleGlobal';
const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Color.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
