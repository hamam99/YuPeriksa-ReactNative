import React from 'react';
import { Pressable, View } from 'react-native';
import { Divider } from 'react-native-elements';
import * as constanta from '../../assets';
import { Input, TextCustom } from '../../components/atoms';
import { TemplateLogin } from '../../components/organism';
import { colors } from '../../utils/colors';

const Register = ({ navigation }) => {
  const TextFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 35,
          alignContent: 'center',
        }}>
        <TextCustom
          text={'Anda Lupa Password ? '}
          style={{
            color: colors.text.forth,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <TextCustom text={'Reset'} />
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
            navigation.navigate('Login');
          }}>
          <TextCustom text={'Login'} />
        </Pressable>
      </View>
    );
  };

  return (
    <TemplateLogin>
      <TextCustom
        text={'DAFTAR'}
        style={{
          marginBottom: 20,
          fontSize: constanta.FONTSIZE_MD,
          color: colors.text.secondary,
          fontFamily: constanta.FAMILY_BOLD,
        }}
      />
      <Input
        placeholder={'Masukan Nama Lengkap'}
        style={{ marginBottom: 20 }}
      />
      <Input placeholder={'Masukan E-mail'} style={{ marginBottom: 20 }} />
      <Input placeholder={'Masukan No Telp'} style={{ marginBottom: 20 }} />
      <Input placeholder={'Masukan Password'} style={{ marginBottom: 20 }} />
      <Input
        placeholder={'Masukan Password Konfirmasi'}
        style={{ marginBottom: 20 }}
      />
      <Pressable
        style={{
          backgroundColor: colors.text.orange,
          height: 40,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextCustom
          text={'DAFTAR'}
          style={{
            color: colors.text.white,
            fontFamily: constanta.FAMILY_BOLD,
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

export default Register;
