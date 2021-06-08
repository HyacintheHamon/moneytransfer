import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationActions,
} from 'react-navigation';
import DesktopMenuIconTabs from '@components/atoms/DesktopMenuIconTabs';
import Page1 from '@pages/Page1';
import Page2 from '@pages/Page2';
import Page3 from '@pages/Page3';
import Page4 from '@pages/Page4';

const AppContent = createSwitchNavigator(
  {
    Home: {
      screen: Page1,
    },
    Pay: {
      screen: Page2,
    },
    Transactions: {
      screen: Page3,
    },
    Profile: {
      screen: Page4,
    },
  },
  {
    resetOnBlur: false,
  },
);

class DesktopMenu extends React.PureComponent {
  static router = AppContent.router;

  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
    };
  }

  onTabPressed = routeName => {
    this.props.navigation.navigate({routeName});
  };

  handleNavChange = ({action}) => {
    if (action.type === NavigationActions.NAVIGATE) {
      this.setState({
        selectedTab: action.routeName,
      });
    }
  };

  render() {
    const {navigation} = this.props;

    const tabs = [
      {
        tabName: 'Home',
        tabIcon: 'home',
      },
      {
        tabName: 'Pay',
        tabIcon: 'arrowsalt',
      },
      {
        tabName: 'Transactions',
        tabIcon: 'creditcard',
      },
      {
        tabName: 'Profile',
        tabIcon: 'user',
      },
    ];

    return (
      <View style={styles.container}>
        <DesktopMenuIconTabs
          tabs={tabs}
          onTabPressed={this.onTabPressed}
          selectedTab={this.state.selectedTab}
        />
        <View style={styles.content}>
          <AppContent
            navigation={navigation}
            screenProps={{onDidFocus: this.handleNavChange}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
});

export default createAppContainer(DesktopMenu);
