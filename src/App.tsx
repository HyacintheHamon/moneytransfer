import React from 'react';
import {Platform} from 'react-native';
import BottomTabsNavigator from '@navigation/index';
import DesktopMenu from '@components/atoms/DesktopMenu';
import {useMediaQuery} from 'react-responsive';

const App = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  return Platform.OS === 'web' && !isMobile ? (
    <DesktopMenu />
  ) : (
    <BottomTabsNavigator />
  );
};

export default App;
