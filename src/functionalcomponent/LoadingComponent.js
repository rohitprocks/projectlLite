import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const LoadingComponent = props => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.loaderTextStyle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderTextStyle: {
    color: 'white',
    marginTop: 10,
    fontWeight: '600',
  },
});

export default LoadingComponent;
