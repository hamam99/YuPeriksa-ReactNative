import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import * as constanta from '../../../assets';

const TextCustom = ({ text, style }) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: constanta.FAMILY,
      color: colors.text.tertiery,
      fontSize: constanta.FONTSIZE_SM,
    },
  });

  return (
    <View>
      <Text style={[styles.text, { ...style }]}>{text}</Text>
    </View>
  );
};

export default TextCustom;
