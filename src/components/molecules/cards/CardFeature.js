import React from 'react';
import {
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {
  icon_public_service,
  icon_lab,
  icon_special_service,
  icon_konsultasi,
} from '../../../assets';
import { colors } from '../../../utils/colors';
import * as Font from '../../../assets/fonts/index';
import { Avatar } from 'react-native-elements';

/**
 * Card Feature component for displaying in Home.
 */
const CardFeature = () => {
  return (
    <View style={_styles.container}>
      <Pressable
        onPress={() => {
          alert('ini fitur umum');
        }}
        style={_styles.section}>
        <Avatar
          size={50}
          rounded
          avatarStyle={{
            resizeMode: 'center',
            transform: [{ scale: 2.2 }],
            borderRadius: 0,
          }}
          source={icon_public_service}
          overlayContainerStyle={{
            backgroundColor: colors.background.secondary,
          }}
        />
        <Text style={_styles.title}>YukPeriksa</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          alert('ini fitur lab');
        }}
        style={_styles.section}>
        <Avatar
          size={50}
          rounded
          avatarStyle={{
            resizeMode: 'center',
            transform: [{ scale: 2.2 }],
            borderRadius: 0,
          }}
          source={icon_lab}
          overlayContainerStyle={{
            backgroundColor: colors.background.secondary,
          }}
        />
        <Text style={_styles.title}>Laboratorium</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          alert('ini fitur layanan khusus');
        }}
        style={_styles.section}>
        <Avatar
          size={50}
          rounded
          avatarStyle={{
            resizeMode: 'center',
            transform: [{ scale: 2.2 }],
            borderRadius: 0,
          }}
          source={icon_special_service}
          overlayContainerStyle={{
            backgroundColor: colors.background.secondary,
          }}
        />
        <Text style={_styles.title}>Layanan Khusus</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          alert('ini fitur konsultasi');
        }}
        style={_styles.section}>
        <Avatar
          size={50}
          rounded
          avatarStyle={{
            resizeMode: 'center',
            transform: [{ scale: 2.2 }],
            borderRadius: 0,
          }}
          source={icon_konsultasi}
          overlayContainerStyle={{
            backgroundColor: colors.background.secondary,
          }}
        />
        <Text style={_styles.title}>Konsultasi</Text>
      </Pressable>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 2,
    fontFamily: Font.FAMILY,
    fontSize: Font.FONTSIZE_XS,
  },
});

export default CardFeature;
