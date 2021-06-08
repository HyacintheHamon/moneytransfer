import React from 'react';
import {NavigationEvents} from 'react-navigation';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {useMediaQuery} from 'react-responsive';

interface Props {
  screenProps?: any;
}

const Page1 = (props: Props) => {
  const {screenProps} = props;
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && !isMobile ? (
        <NavigationEvents onDidFocus={screenProps.onDidFocus} />
      ) : null}
      <Text>Page 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page1;
