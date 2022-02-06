import React from 'react';
import { Alert, Text, View } from 'react-native';
// import { Icon } from 'react-native-elements/dist/icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';

const LayananUmum = () => {
  const Header = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 58,
          alignItems: 'center',
          marginHorizontal: 20,
          flexDirection: 'row',
        }}>
        <Icon size={20} name="chevron-back" onPress={() => {}} />
        <Text
          style={{
            fontSize: 16,
          }}>
          Umum
        </Text>
      </View>
    );
  };

  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#E2E2E2',
          marginHorizontal: 20,
        }}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Divider />

      <Text>Layanan Umum</Text>
    </View>
  );
};

export default LayananUmum;
