import React from 'react';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import * as Font from '../../assets';
import { Input, TextCustom } from '../../components/atoms';
import { TemplateLogin } from '../../components/organism';
import { colors } from '../../utils/colors';
import { facebookIcon, googleIcon, LogoYuPeriksa } from '../../assets';

const ForgotPassword = ({ navigation }) => {
  const styles = StyleSheet.create({
    pressable: {
      borderRadius: 15,
      flex: 1,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    iconGoogle: {
      width: 20,
      height: 20,
      alignSelf: 'center',
      marginRight: 21,
      position: 'absolute',
      left: 0,
      marginLeft: 13,
    },
    iconFacebook: {
      width: 30,
      height: 30,
      alignSelf: 'center',
      marginRight: 21,
      position: 'absolute',
      left: 0,
    },
    containerFooter: {
      flexDirection: 'column',
      alignContent: 'center',
    },
  });

  const TextFooter = () => {
    return (
      <View style={styles.containerFooter}>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <TextCustom text={'Login'} />
          </Pressable>
          <TextCustom
            text={'atau'}
            style={{
              color: colors.text.forth,
              marginHorizontal: 5,
            }}
          />
          <Pressable
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <TextCustom text={'Daftar'} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <TemplateLogin>
      <TextCustom
        text={'LUPA PASSWORD'}
        style={{
          marginBottom: 20,
          fontSize: Font.FONTSIZE_MD,
          color: colors.text.secondary,
          fontFamily: Font.FAMILY_BOLD,
        }}
      />
      <Input placeholder={'Masukan E-mail'} style={{ marginBottom: 20 }} />
      <Pressable
        style={{
          backgroundColor: colors.text.orange,
          height: 40,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextCustom
          text={'LUPA PASSWORD'}
          style={{
            color: colors.text.white,
            fontFamily: Font.FAMILY_BOLD,
          }}
        />
      </Pressable>
      <Divider
        width={1}
        color={colors.text.grey2}
        style={{ marginVertical: 20 }}
      />
      {TextFooter()}
    </TemplateLogin>
  );
};

export default ForgotPassword;
