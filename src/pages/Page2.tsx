import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text>Page 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
