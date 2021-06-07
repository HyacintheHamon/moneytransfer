import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabBarAdvancedButton} from '@components/atoms/TabBarAdvancedButton';
import {colors} from '@constants/index';
import styled from 'styled-components/native';
// @ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
// @ts-ignore
import Feather from 'react-native-vector-icons/dist/Feather';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';

const BottomBar = createBottomTabNavigator();

const config = {
  screens: {
    Page1: 'Page1',
    Page2: 'Page2',
    Page3: 'Page3',
    Page4: 'Page4',
  },
};

const linking = {
  prefixes: ['http://localhost:3000', 'http://localhost'],
  config,
};

const Navigator = () => (
  <NavigationContainer linking={linking} fallback={<Text>Chargement...</Text>}>
    <BottomBar.Navigator
      tabBar={props =>
        Platform.OS === 'web' ? (
          <TabBarMenu>
            <View style={styles.xFillLine} />
            <BottomTabBar {...props} />
          </TabBarMenu>
        ) : (
          <View style={styles.tabBar}>
            <View style={styles.xFillLine} />
            <BottomTabBar {...props} />
          </View>
        )
      }
      tabBarOptions={{
        showLabel: false,
        style: styles.tabMask,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.black,
        tabStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <BottomBar.Screen
        name="Page1"
        component={Page1}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="Page2"
        component={Page2}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <Feather
                name="send"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Pay
              </Text>
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="Menu"
        component={Page1}
        options={{
          tabBarButton: () => <TabBarAdvancedButton onPress={() => {}} />,
        }}
      />
      <BottomBar.Screen
        name="Page3"
        component={Page3}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="creditcard"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Transactions
              </Text>
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="Page4"
        component={Page4}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="user"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </BottomBar.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    height: 75,
    width: '100%',
    backgroundColor: 'transparent',
    shadowRadius: 6,
    shadowColor: '#5e5e72',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    elevation: 30,
    zIndex: 1,
  },
  tabMask: {
    borderTopWidth: 0,
    elevation: 30,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'transparent',
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: colors.white,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarIcon: {
    marginTop: 10,
  },
  tabBarTitle: {
    fontSize: 10,
    marginTop: 10,
    textTransform: 'uppercase',
  },
});

const TabBarMenu = styled.View`
    justify-content: space-around,
    filter: drop-shadow(5px -9px 24px rgba(96, 97, 112, 0.15));
    position: fixed;
    height: 75px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: transparent;
    width: '100%';
    z-index: 1;
  `;

export default Navigator;
