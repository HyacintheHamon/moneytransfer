import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import DesktopMenuIconTab from '@components/atoms/DesktopMenuIconTab';

const DesktopMenuIconTabs = props => {
  const {tabs, selectedTab, onTabPressed} = props;
  return (
    <SafeAreaView style={styles.container}>
      {tabs.map(({tabName, tabIcon}) => {
        return (
          <DesktopMenuIconTab
            onPress={() => onTabPressed(tabName)}
            key={tabName}
            tabName={tabName}
            tabIcon={tabIcon}
            isSelected={selectedTab === tabName}
          />
        );
      })}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    minWidth: 250,
    backgroundColor: '#eee',
    height: '100%',
  },
});
export default DesktopMenuIconTabs;
