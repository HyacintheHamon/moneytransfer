import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {colors} from '@constants/index';

const DesktopMenuIconTab = props => {
  const {isSelected, tabIcon, tabName, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign
        name={tabIcon}
        size={24}
        color={isSelected ? colors.blue : colors.black}
        style={styles.icon}
      />
      <Text
        style={[
          styles.text,
          isSelected ? {color: colors.blue} : {color: colors.black},
        ]}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE',
    padding: 12,
  },
  text: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  icon: {
    width: 66,
    textAlign: 'center',
  },
});

export default DesktopMenuIconTab;
