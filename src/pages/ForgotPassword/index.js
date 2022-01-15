import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LogoYuPeriksa } from '../../assets';
import * as Font from '../../assets/fonts/index';
import { colors } from '../../utils/colors';

const ForgotPassword = ({ navigation }) => {
  const renderLogo = () => {
    return (
      <Image
        source={LogoYuPeriksa}
        resizeMode="contain"
        style={{ width: 150, height: 54, marginVertical: 43 }}
      />
    );
  };

  const renderForm = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.background.main,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          padding: 40,
        }}>
        <StatusBar backgroundColor={colors.background.secondary} />
        <Text
          style={{
            fontFamily: Font.FAMILY_BOLD,
            fontSize: Font.FONTSIZE_LG,
            color: colors.text.blue,
            marginBottom: 20,
          }}>
          Lupa Password
        </Text>
        <TextInput
          style={{
            height: 45,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
          placeholder={'Masukan Email Anda'}
        />

        <Pressable
          onPress={() => {
            navigation.navigate('Main');
          }}
          style={{
            backgroundColor: colors.button.background1,
            borderRadius: 15,
            height: 45,
            width: '100%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: colors.text.white,
              fontFamily: Font.FAMILY_BOLD,
              fontSize: Font.FONTSIZE_MD,
            }}>
            LUPA PASSWORD
          </Text>
        </Pressable>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: colors.border,
            marginVertical: 25,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 35,
            alignContent: 'center',
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                fontFamily: Font.FAMILY,
                fontSize: Font.FONTSIZE_MD,
                color: colors.text.tertiery,
              }}>
              Login
            </Text>
          </Pressable>
          <Text
            style={{
              fontFamily: Font.FAMILY,
              fontSize: Font.FONTSIZE_MD,
              color: colors.text.forth,
              marginHorizontal: 5,
            }}>
            atau
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={{
                fontFamily: Font.FAMILY,
                fontSize: Font.FONTSIZE_MD,
                color: colors.text.tertiery,
              }}>
              Daftar
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.secondary,
        alignItems: 'center',
      }}>
      {renderLogo()}
      {renderForm()}
    </View>
  );
};

export default ForgotPassword;
