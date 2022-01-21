/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { HeaderLogo } from '../../molecules';
import { colors } from '../../../utils/colors';

const TemplateLogin = ({ children }) => {
  // hooks
  const sheetRef = useRef();

  const heightBottomSheet = Dimensions.get('window').height * 0.75;

  const heightHeader = Dimensions.get('window').height * 0.25;

  // variables
  const snapPoints = useMemo(() => [heightBottomSheet], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.background.secondary,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      height: heightHeader,
    },
  });

  // render
  return (
    <View style={styles.container}>
      <HeaderLogo style={styles.header} />
      <BottomSheet
        style={{ zIndex: 2, borderRadius: 20, overflow: 'hidden' }}
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <BottomSheetScrollView>
          <View style={{ marginHorizontal: 35, marginTop: 20 }}>
            {children}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default TemplateLogin;
