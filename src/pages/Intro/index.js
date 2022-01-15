import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doctors, IntroBackground, LogoYuPeriksa } from '../../assets';
import { colors } from '../../utils/colors';
import * as Font from '../../assets/fonts/index';

const Intro = ({ navigation }) => {
  return (
    <View style={_styles.container}>
      <StatusBar backgroundColor={colors.background.secondary} />
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
      <Pressable
        style={_styles.footerButtonWrapper}
        onPress={() => {
          navigation.navigate('Login');
        }}>
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
    fontSize: Font.FONTSIZE_XXL,
    fontFamily: Font.FAMILY_SEMI_BOLD,
    textAlign: 'center',
    paddingVertical: 36,
  },
  title2: {
    color: colors.text.white,
    fontSize: Font.FONTSIZE_MD,
    fontFamily: Font.FAMILY_MEDIUM,
    textAlign: 'center',
  },
  footerImage: {
    width: 500,
    height: 300,
    marginLeft: -50,
    position: 'absolute',
    bottom: 0,
  },
  footerButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 50,
    width: 150,
    borderTopLeftRadius: 80 / 2,
    backgroundColor: colors.text.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    fontFamily: Font.FAMILY,
    fontSize: Font.FONTSIZE_MD,
    color: colors.text.blue2,
  },
});
