import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootNavigation from './src/Navigations/RootNavigation';
import {Color} from './src/global/StyleGlobal';
import {Provider} from 'react-redux';
import store from './src/redux/store';
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
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
