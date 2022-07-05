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
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TopBar from './src/components/TopBar';
import CryptoList from './src/containers/CryptoList';

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
