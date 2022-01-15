import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { logo_blue, bg_digital_card } from '../../../assets';
import { colors } from '../../../utils/colors';
import * as Font from '../../../assets/fonts';

/**
 * Card Digital component for displaying in Home.
 * @props heading String
 * @props heading Boolean
 * @props children component
 */
const Wrap = ({ heading, fullwidth, children }) => {
  return (
    <View
      style={[
        _styles.container,
        fullwidth ? _styles.fullwidth : _styles.notFullwidth,
      ]}>
      <Text style={_styles.heading}>{heading}</Text>
      {children}
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontFamily: Font.FAMILY_MEDIUM,
    fontSize: Font.FONTSIZE_MD,
    paddingBottom: 10,
  },
  fullwidth: {
    marginLeft: 30,
  },
  notFullwidth: {
    marginHorizontal: 15,
  },
});

export default Wrap;
