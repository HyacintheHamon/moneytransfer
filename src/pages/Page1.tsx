import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
export default function Page1() {
  return (
    <View style={styles.container}>
      <Text>Page 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
