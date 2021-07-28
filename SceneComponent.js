const React = require('react');
const ReactNative = require('react-native');
const { Component, } = React;
const { View, StyleSheet, } = ReactNative;

const StaticContainer = require('./StaticContainer');

const SceneComponent = (Props) => {
  const { shouldUpdated, ...props } = Props;
  const deviceWidth = ReactNative.Dimensions.get('screen').width - 50;
  const [layoutWidth, setLayoutWidth, ] = React.useState(0);
  const [layoutHeight, setLayoutHeight, ] = React.useState(0);

  const setDimensions = (e) => {
    setLayoutWidth(e.nativeEvent.layout.width);
    setLayoutHeight(e.nativeEvent.layout.height);
  };

  return <View onLayout={setDimensions} style={{ width: deviceWidth, height: 'auto', }}>
        {props.children}
  </View>;
};

module.exports = SceneComponent;
