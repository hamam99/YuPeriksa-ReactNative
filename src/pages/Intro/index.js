import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {doctors, IntroBackground, LogoYuPeriksa} from '../../assets';
import {colors} from '../../utils/colors';

const Intro = () => {
  return (
    <View style={_styles.container}>
      <Image
        source={require('../../assets/icons/logo-yuperiksa.png')}
        style={_styles.logo}
      />
      <Text style={_styles.title1}>{"It's easy to live\nhealty"}</Text>
      <Text style={_styles.title2}>
        {'Pelayanan Kesehatan Medis\nuntuk Kita Semua'}
      </Text>
      <Image
        source={doctors}
        style={_styles.footerImage}
        resizeMode={'contain'}
      />
      <Pressable style={_styles.footerButtonWrapper} onPress={() => {}}>
        <Text style={_styles.footerButtonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default Intro;

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    alignItems: 'center',
    paddingTop: 100,
  },
  logo: {
    width: 133,
    height: 32,
  },
  title1: {
    color: colors.text.white,
    fontSize: 38,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    paddingVertical: 36,
  },
  title2: {
    color: colors.text.white,
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  footerImage: {
    width: 542,
    height: 333,
    marginLeft: -50,
    position: 'absolute',
    bottom: 0,
  },
  footerButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 81,
    width: 230,
    borderTopLeftRadius: 230 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.text.blue2,
  },
});
