import React, { useState } from 'react';
import { FlatList, Text, ToastAndroid, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles';
import FastImage from 'react-native-fast-image';
import * as Font from '../../../assets';
import { Button } from 'react-native-elements';

const LayananUmum = () => {
  const DummyListFilterMenu = [
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

  const DummyListHospital = [
    {
      id: 1,
      name: 'Klinik Sindang Sari(jst)',
      address:
        'Jl. Cigadung Selatan No.1A, Cigadung,Kecamatan Barat Kabupaten Bogor',
      image:
        'https://images.vexels.com/media/users/3/208879/isolated/lists/c005fb97ec133a7cc8515e04c96ffa8f-hospital-simple-building.png',
      status: 'open',
      distance: '4.7 Km',
      number_of_services: '5 layanan',
    },
    {
      id: 2,
      name: 'Klinik Budhi Pratama',
      address:
        'Jl. Cigadung Selatan No.1A, Cigadung, Kecamatan Barat Kabupaten Bogor',
      image:
        'https://images.vexels.com/media/users/3/208879/isolated/lists/c005fb97ec133a7cc8515e04c96ffa8f-hospital-simple-building.png',
      status: 'open',
      distance: '6.7 Km',
      number_of_services: '10 layanan',
    },
    {
      id: 3,
      name: 'Dokter Darlina',
      address:
        'Jl. Cigadung Selatan No.1A, Cigadung,Kecamatan Barat Kabupaten Bogor',
      image:
        'https://images.vexels.com/media/users/3/208879/isolated/lists/c005fb97ec133a7cc8515e04c96ffa8f-hospital-simple-building.png',
      status: 'open',
      distance: '20.1 Km',
      number_of_services: '7 layanan',
    },
    {
      id: 4,
      name: 'Dokter Darlina 2',
      address:
        'Jl. Cigadung Selatan No.1A, Cigadung,Kecamatan Barat Kabupaten Bogor',
      image:
        'https://images.vexels.com/media/users/3/208879/isolated/lists/c005fb97ec133a7cc8515e04c96ffa8f-hospital-simple-building.png',
      status: 'open',
      distance: '20.1 Km',
      number_of_services: '7 layanan',
    },
    {
      id: 5,
      name: 'Klinik Budhi Pratama',
      address:
        'Jl. Cigadung Selatan No.1A, Cigadung,Kecamatan Barat Kabupaten Bogor',
      image:
        'https://images.vexels.com/media/users/3/208879/isolated/lists/c005fb97ec133a7cc8515e04c96ffa8f-hospital-simple-building.png',
      status: 'open',
      distance: '30.1 Km',
      number_of_services: '10 layanan',
    },
  ];

  const [idMenuFilterActive, setIdMenuFilterActive] = useState(1);

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

  const renderItemFilter = ({ item }) => {
    const isActive = idMenuFilterActive === item.id;

    return (
      <TouchableOpacity
        style={[
          styles.menuFilter,
          { backgroundColor: isActive ? '#FFEDCE' : '#ffffff' },
        ]}
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
    return (
      <View>
        <FlatList
          data={DummyListFilterMenu}
          keyExtractor={item => item.id}
          renderItem={renderItemFilter}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const ListHospital = () => {
    return (
      <FlatList
        ListHeaderComponent={HeaderListHospital}
        ItemSeparatorComponent={DividerListHospital}
        keyExtractor={item => item.id}
        data={DummyListHospital}
        renderItem={renderItemHospital}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const HeaderListHospital = () => {
    return <View style={styles.headerListHospital} />;
  };

  const DividerListHospital = () => {
    return <View style={styles.dividerListHorizontal} />;
  };

  const renderItemHospital = ({ item }) => {
    return (
      <View style={styles.wrapperItemHospital}>
        <FastImage
          style={styles.imageItemHospital}
          source={{ uri: item.image }}
        />
        <View style={styles.wrapperInfoItemHospital}>
          <Text style={styles.nameItemHospital}>{item.name}</Text>
          <Text style={styles.addressItemHospital}>{item.address}</Text>
          <View style={styles.wrapperBottomItemHospital}>
            <Text style={styles.statusItemHospital}>{item.status}</Text>
            <View style={styles.distanceWrapperItemHospital}>
              <Ionicons size={15} name="location-outline" />
              <Text style={styles.distanceItemHospital}>{item.distance}</Text>
            </View>
            <View style={styles.wrapperNumberOfServicesItemHospital}>
              <Ionicons size={15} name="person-outline" />
              <Text style={styles.numberOfServicesItemHospital}>
                {item.number_of_services}
              </Text>
            </View>
            <Button
              onPress={() => {}}
              title="Detail"
              buttonStyle={styles.button}
              type="outline"
              titleStyle={styles.titleButton}
              containerStyle={styles.containerButton}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <Divider />
      <MenuFilter />
      <ListHospital />
    </View>
  );
};

export default LayananUmum;
