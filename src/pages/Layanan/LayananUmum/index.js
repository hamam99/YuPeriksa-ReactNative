import React from 'react';
import { Alert, Text, ToastAndroid, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

const LayananUmum = () => {
  const Header = () => {
    const onPressBack = () => {
      ToastAndroid.show('Back', ToastAndroid.SHORT);
    };

    const onPressFilter = () => {
      ToastAndroid.show('Filter', ToastAndroid.SHORT);
    };

    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPressBack}>
          <Ionicons size={20} name="chevron-back" />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Umum</Text>
        <TouchableOpacity onPress={onPressFilter} style={styles.filterHeader}>
          <FontAwesomeIcons size={20} color="#969A99" name="filter" />
        </TouchableOpacity>
      </View>
    );
  };

  const Divider = () => {
    return <View style={styles.dividerHeader} />;
  };

  return (
    <View style={styles.container}>
      <Header />
      <Divider />
      <Text style={{ marginHorizontal: 20 }}>Layanan Umum</Text>
    </View>
  );
};

export default LayananUmum;
