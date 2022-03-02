import React from 'react';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const MenuFilter = ({ ListFilterMenu }) => {
  const [idMenuFilterActive, setIdMenuFilterActive] = useState(1);

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

  return (
    <View style={{ marginBottom: 8 }}>
      <FlatList
        data={ListFilterMenu}
        keyExtractor={item => item.id}
        renderItem={renderItemFilter}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MenuFilter;
