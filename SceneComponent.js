const React = require('react');
const ReactNative = require('react-native');
const { View, StyleSheet, } = ReactNative;

import Orientation from './components/Orientation';

const subtractiPhonePortraitWidth = 54;
const subtractiPhoneLandscapeWidth = 373;

const subtractiPadPortraitWidth = 328;
const subtractiPadLandscapeWidth = 328;

const iPhone = ReactNative.Platform.OS === 'ios';
const android = ReactNative.Platform.OS === 'android';
const iPad = ReactNative.Platform.isPad ? true : false;

const SceneComponent = (Props) => {
  const { shouldUpdated, ...props } = Props;

  const [layoutWidth, setLayoutWidth, ] = React.useState(0);
  const [layoutHeight, setLayoutHeight, ] = React.useState(0);

  const deviceWidth = ReactNative.Dimensions.get('screen').width;

  const [orientation, setOrientation, ] = React.useState(
    Orientation.isPortrait() ? 'portrait' : 'landscape'
  );

  React.useEffect(() => {
    ReactNative.Dimensions.addEventListener('change', () => {
      setOrientation(Orientation.isPortrait() ? 'portrait' : 'landscape');
    });
  }, []);

  React.useEffect(() => {
    if (iPhone && orientation === 'portrait')      {setLayoutWidth(deviceWidth - subtractiPhonePortraitWidth);}
    if (iPhone && orientation === 'landscape')      {setLayoutWidth(deviceWidth - subtractiPhoneLandscapeWidth);}
    if (iPad && orientation === 'portrait')      {setLayoutWidth(deviceWidth - subtractiPadPortraitWidth);}
    if (iPad && orientation === 'landscape')      {setLayoutWidth(deviceWidth - subtractiPadLandscapeWidth);}
    if (android)      {setLayoutWidth(deviceWidth - 55);}
  }, []);

  return <View
  onLayout={() => {}}
  style={{
    width: layoutWidth,
    height: 'auto',
  }}>
        {props.children}
  </View>;
};

module.exports = SceneComponent;
