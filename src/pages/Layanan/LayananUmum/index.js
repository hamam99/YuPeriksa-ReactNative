import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles';
import Header from '../../../components/atoms/Header';
import MenuFilter from '../../../components/molecules/Layanan/ListFilter';
import ListHospital from '../../../components/molecules/Layanan/ListHospital';

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

  const Divider = () => {
    return <View style={styles.dividerHeader} />;
  };

  return (
    <View style={styles.container}>
      <Header />
      <Divider />
      <MenuFilter ListFilterMenu={DummyListFilterMenu} />
      <ListHospital data={DummyListHospital} />
    </View>
  );
};

export default LayananUmum;
