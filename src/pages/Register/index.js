import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { facebookIcon, googleIcon, LogoYuPeriksa } from '../../assets';
import * as Font from '../../assets/fonts/index';
import { colors } from '../../utils/colors';

const Register = ({ navigation }) => {
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
            marginBottom: 10,
          }}>
          Daftar
        </Text>
        <TextInput
          style={{
            height: 45,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 15,
            marginVertical: 20,
          }}
          placeholder={'Masukan Email Anda'}
        />

        <TextInput
          style={{
            height: 45,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 15,
          }}
          placeholder={'Masukan No Telpon Anda'}
        />

        <TextInput
          style={{
            height: 45,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 15,
            marginVertical: 20,
          }}
          placeholder={'Masukan Password'}
        />

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
          placeholder={'Masukan Password Konfirmasi'}
        />
        <Pressable
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
            DAFTAR
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
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Font.FAMILY,
              fontSize: Font.FONTSIZE_MD,
              color: colors.text.forth,
            }}>
            {'Sudah punya akun '}
          </Text>
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

export default Register;
