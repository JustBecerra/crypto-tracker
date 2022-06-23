import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function TopBar() {
  return (
    <View style={styles.TopBarSection}>
      <Text style={styles.Title}>CryptoTracker Pro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TopBarSection: {
    padding: 24,
    backgroundColor: '#2d3187',
  },
  Title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
