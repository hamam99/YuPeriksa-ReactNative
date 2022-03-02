import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const ListHospital = ({ data = [] }) => {
  const HeaderListHospital = () => {
    return <View style={styles.headerListHospital} />;
  };

  const DividerListHospital = () => {
    return <View style={styles.dividerListHorizontal} />;
  };

  const renderItemHospital = ({ item }) => {
    return (
      <View style={styles.wrapperItemHospital}>
        <View style={styles.wrapperImage}>
          <FastImage
            style={styles.imageItemHospital}
            source={{ uri: item.image }}
          />
        </View>

        <View style={styles.containerInfo}>
          <View style={styles.wrapperInfoItemHospital}>
            <Text style={styles.nameItemHospital}>{item.name}</Text>
            <Text style={styles.addressItemHospital}>{item.address}</Text>
          </View>

          <View style={styles.wrapperBottomItemHospital}>
            <Text style={styles.statusItemHospital}>{item.status}</Text>
            <View style={styles.distanceWrapperItemHospital}>
              <Ionicons size={15} name="location-outline" />
              <Text style={styles.distanceItemHospital}>{item.distance}</Text>
            </View>
            <View style={[styles.wrapperNumberOfServicesItemHospital]}>
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
    <FlatList
      ListHeaderComponent={HeaderListHospital}
      ItemSeparatorComponent={DividerListHospital}
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderItemHospital}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListHospital;
