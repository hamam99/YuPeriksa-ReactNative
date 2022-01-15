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

const Login = ({ navigation }) => {
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
          Masuk
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

        <TextInput
          style={{
            height: 45,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 15,
          }}
          placeholder={'Masukan Password Anda'}
        />

        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            backgroundColor: colors.button.background1,
            borderRadius: 15,
            height: 45,
            width: '100%',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: colors.text.white,
              fontFamily: Font.FAMILY_BOLD,
              fontSize: Font.FONTSIZE_MD,
            }}>
            LOGIN
          </Text>
        </Pressable>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: colors.border,
            marginVertical: 30,
          }}
        />
        <View
          style={{
            height: 45,
            width: '100%',
            flexDirection: 'row',
          }}>
          <Pressable
            style={{
              borderRadius: 15,
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              marginRight: 20,
              borderWidth: 1,
              borderColor: colors.border,
            }}>
            <Image
              source={googleIcon}
              style={{
                width: 20,
                height: 20,
                alignSelf: 'center',
                marginRight: 21,
                position: 'absolute',
                left: 0,
                marginLeft: 13,
              }}
            />
            <Text
              style={{
                fontFamily: Font.FAMILY_BOLD,
                fontSize: Font.FONTSIZE_MD,
                alignSelf: 'center',
              }}>
              Google
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderRadius: 15,
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colors.border,
            }}>
            <Image
              source={facebookIcon}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                marginRight: 21,
                position: 'absolute',
                left: 0,
              }}
            />
            <Text
              style={{
                fontFamily: Font.FAMILY_BOLD,
                fontSize: Font.FONTSIZE_MD,
                alignSelf: 'center',
              }}>
              Facebook
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            height: 35,
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Font.FAMILY,
              fontSize: Font.FONTSIZE_MD,
              color: colors.text.forth,
            }}>
            {'Anda Lupa Password ? '}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text
              style={{
                fontFamily: Font.FAMILY,
                fontSize: Font.FONTSIZE_MD,
                color: colors.text.tertiery,
              }}>
              Reset
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

export default Login;
