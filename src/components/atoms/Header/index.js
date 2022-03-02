import React from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const Header = ({ title }) => {
  const onPressBack = () => {
    ToastAndroid.show('Back', ToastAndroid.SHORT);
  };

  const onPressFilter = () => {
    ToastAndroid.show('Filter', ToastAndroid.SHORT);
  };

  return (
    <View style={[styles.wrapperHeader]}>
      <TouchableOpacity onPress={onPressBack}>
        <Ionicons size={20} name="chevron-back" />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{title}</Text>
      <TouchableOpacity onPress={onPressFilter} style={styles.filterHeader}>
        <FontAwesomeIcons size={20} color="#969A99" name="filter" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
