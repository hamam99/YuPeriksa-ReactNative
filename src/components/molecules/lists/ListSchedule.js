import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as Font from '../../../assets/fonts/index';
import { colors } from '../../../utils/colors';

/**
 * Card Feature component for displaying in Home.
 */
const ListSchedule = ({ icon, title, datetime }) => {
  return (
    <View style={_styles.container}>
      <Pressable
        style={_styles.pressable}
        onPress={() => {
          alert('ini fitur list');
        }}>
        <View style={_styles.wrapIcon}>
          <Avatar
            size={40}
            avatarStyle={{
              resizeMode: 'center',
              transform: [{ scale: 2.2 }],
            }}
            containerStyle={_styles.avatar}
            source={icon}
          />
        </View>
        <View style={_styles.wrapTitle}>
          <Text style={_styles.text}>{title}</Text>
        </View>
        <View style={_styles.wrapDateTime}>
          <Text style={_styles.text}>{datetime}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  pressable: {
    flexDirection: 'row',
  },
  wrapIcon: {
    width: '15%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapDateTime: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapTitle: {
    width: '50%',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Font.FAMILY,
    color: colors.text.primary,
    fontSize: Font.FONTSIZE_SM,
  },
  avatar: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default ListSchedule;
