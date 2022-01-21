import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LogoYuPeriksa } from '../../../assets';

/**
 * Header with Main Logo component.
 */
const HeaderLogo = ({ style }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <Image source={LogoYuPeriksa} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  logo: {
    width: 150,
    height: 54,
    marginVertical: 43,
  },
});

export default HeaderLogo;
