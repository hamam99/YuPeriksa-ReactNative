import React from 'react';
import { Alert, Text, ToastAndroid, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LayananUmum = () => {
  const Header = () => {
    const onPressBack = () => {
      ToastAndroid.show('Back', ToastAndroid.SHORT);
    };

    const onPressFilter = () => {
      ToastAndroid.show('Filter', ToastAndroid.SHORT);
    };

    return (
      <View
        style={{
          height: 58,
          alignItems: 'center',
          marginHorizontal: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={onPressBack}>
          <Ionicons size={20} name="chevron-back" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            flex: 1,
          }}>
          Umum
        </Text>
        <TouchableOpacity
          onPress={onPressFilter}
          style={{
            backgroundColor: '#EEEEEE',
            width: 31,
            height: 28,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesomeIcons size={20} color="#969A99" name="filter" />
        </TouchableOpacity>
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
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header />
      <Divider />

      <Text style={{ marginHorizontal: 20 }}>Layanan Umum</Text>
    </View>
  );
};

export default LayananUmum;
