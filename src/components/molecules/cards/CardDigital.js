import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { logo_blue, bg_digital_card } from '../../../assets';
import { colors } from '../../../utils/colors';
import * as Font from '../../../assets/fonts/index';

/**
 * Card Digital component for displaying in Home.
 * @props fullname String
 * @props date String
 * @props number String
 */
const CardDigital = ({ number, fullname, date }) => {
  return (
    <View style={_styles.container}>
      <ImageBackground
        source={bg_digital_card}
        style={{
          width: '100%',
          height: 160,
        }}
        imageStyle={{
          resizeMode: 'contain',
          left: 90,
        }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={_styles.wrappableLogo}>
            <Image
              source={logo_blue}
              resizeMode="contain"
              style={_styles.logo}
            />
          </View>
          <View style={_styles.wrappableTitle}>
            <Text style={_styles.title}>{number}</Text>
            <Text style={_styles.name}>{fullname}</Text>
          </View>
          <View style={_styles.wrappableExpire}>
            <Text style={_styles.title_expired}>
              {'Terdaftar: '} {date}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 15,
    backgroundColor: colors.background.orange,
    height: 180,
    padding: 10,
  },
  wrappableTitle: {
    height: 80,
    paddingTop: 25,
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  wrappableExpire: {
    height: 30,
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  wrappableLogo: {
    height: 50,
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  logo: {
    height: 30,
    marginLeft: -20,
  },
  title: {
    color: colors.text.white,
    fontSize: Font.FONTSIZE_LG,
    fontFamily: Font.FAMILY_MEDIUM,
  },
  name: {
    color: colors.text.white,
    fontSize: Font.FONTSIZE_SM,
    fontFamily: Font.FAMILY,
  },
  title_expired: {
    color: colors.text.white,
    fontSize: Font.FONTSIZE_XS,
    fontFamily: Font.FAMILY,
  },
});

export default CardDigital;
