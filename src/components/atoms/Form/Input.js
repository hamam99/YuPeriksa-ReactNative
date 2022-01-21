import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const Input = ({ placeholder, style }) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      height: 40,
      paddingLeft: 15,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { ...style }]}
        placeholder={placeholder ? placeholder : 'Masukan Text'}
      />
    </View>
  );
};

export default Input;
