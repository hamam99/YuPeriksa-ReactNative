import React, { useState } from 'react';
import { FlatList, Text, ToastAndroid, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

const LayananUmum = () => {
  const [idMenuFilterActive, setIdMenuFilterActive] = useState(0);

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

  const renderItem = ({ item }) => {
    const isActive = idMenuFilterActive === item.id;

    return (
      <TouchableOpacity
        style={{
          marginLeft: 14,
          width: 140,
          height: 35,
          backgroundColor: isActive ? '#FFEDCE' : '#ffffff',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setIdMenuFilterActive(item.id);
        }}>
        <Text style={{ color: isActive ? '#FF972E' : '#969A99' }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const MenuFilter = () => {
    console.log('MenuFilter');
    const filterMenu = [
      {
        id: 1,
        title: 'Klinik',
      },
      {
        id: 2,
        title: 'Puskesmas',
      },
      {
        id: 3,
        title: 'Kebidanan',
      },
      {
        id: 4,
        title: 'Perawatan Tubuh',
      },
    ];

    return (
      <View style={{ paddingVertical: 20 }}>
        <FlatList
          data={filterMenu}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <Divider />
      <MenuFilter />
    </View>
  );
};

export default LayananUmum;
