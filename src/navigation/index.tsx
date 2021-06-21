import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const config = {
  screens: {
    BottomTabNavigator: {
      screens: {
        Page1: 'Page1',
        Page2: 'Page2',
        Page3: 'Page3',
        Page4: 'Page4',
      },
    },
    NotFound: '*',
  },
};

const linking = {
  prefixes: ['http://localhost:3000', 'http://localhost'],
  config,
};

const Navigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Chargement...</Text>}>
      <Stack.Navigator
        initialRouteName="BottomTabNavigator"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
