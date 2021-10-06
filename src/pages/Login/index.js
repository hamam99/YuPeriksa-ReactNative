import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { facebookIcon, googleIcon, LogoYuPeriksa } from '../../assets';
import { colors } from '../../utils/colors';

const Login = () => {
  const renderLogo = () => {
    return (
      <Image
        source={LogoYuPeriksa}
        style={{ width: 224, height: 54, marginVertical: 93 }}
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
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          padding: 43,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: colors.text.blue,
            marginBottom: 5,
          }}>
          Masuk
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: 13,
          }}>
          Nomor Ponsel atau Email
        </Text>
        <TextInput
          style={{
            height: 55,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 10,
          }}
          placeholder={'Nomor Ponsel atau Email'}
        />

        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: 13,
            marginTop: 12,
          }}>
          Password
        </Text>
        <TextInput
          style={{
            height: 55,
            width: '100%',
            borderRadius: 10,
            borderColor: colors.border,
            borderWidth: 1,
            paddingHorizontal: 10,
          }}
          placeholder={'Masukan Password Anda'}
        />

        <Pressable
          style={{
            backgroundColor: colors.button.background1,
            borderRadius: 15,
            height: 65,
            width: '100%',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: colors.text.white,
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
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
            height: 50,
            width: '100%',
            flexDirection: 'row',
            marginTop: 20,
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
                width: 24,
                height: 24,
                alignSelf: 'center',
                marginRight: 21,
                position: 'absolute',
                left: 0,
                marginLeft: 13,
              }}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
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
                width: 32,
                height: 32,
                alignSelf: 'center',
                marginRight: 21,
                position: 'absolute',
                left: 0,
              }}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
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
              fontFamily: 'SegoeUI-Regular',
              fontSize: 16,
              color: colors.text.forth,
            }}>
            {'Anda Lupa Password ? '}
          </Text>
          <Text
            style={{
              fontFamily: 'SegoeUI-Bold',
              fontSize: 14,
              color: colors.text.tertiery,
            }}>
            {'Reset'}
          </Text>
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
