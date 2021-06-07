import React from 'react';
import {Image, Platform, StyleProp, ViewStyle} from 'react-native';
import {createUseStyles} from '@utils/createUseStyles';

interface Props {
  width: number;
  height: number;
  name: string;
  //ts-ignore
  style?: StyleProp<ViewStyle>;
}

export type StylesContext = {};

const SVGLocalLoader: React.FC<Props> = props => {
  const {width, height, name, style} = props;

  const useStyles = createUseStyles(getStyles);
  const styles = useStyles({}, style);

  const allPaths = {
    btnMenu: require('@assets/icons/btn-menu.svg').default,
    btnMenuActive: require('@assets/icons/btn-menu-active.svg').default,
    tabBg: require('@assets/icons/tab-bg.svg').default,
  };

  //@ts-ignore
  const MyComponent = allPaths[name];

  return Platform.OS === 'web' ? (
    <Image style={{width: width, height: height}} source={MyComponent} />
  ) : (
    <MyComponent width={width} height={height} />
  );
};

export const getStyles = (
  context?: StylesContext,
  style?: StyleProp<ViewStyle>,
): StyleProp<ViewStyle> => [{}, style];

export default SVGLocalLoader;
