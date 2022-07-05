/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaView} from 'react-native';
import TopBar from './src/components/TopBar';
import CryptoList from './src/containers/CryptoList';
import {theme} from './src/utils/theme';

const App = () => {
  const backgroundStyle = {
    backgroundColor: theme.colors.white,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <TopBar />
        <CryptoList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
