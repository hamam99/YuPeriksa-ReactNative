import { StyleSheet } from 'react-native';
import * as Font from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
  wrapperHeader: {
    height: 58,
    alignItems: 'center',
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  titleHeader: {
    fontSize: 16,
    flex: 1,
  },
  filterHeader: {
    backgroundColor: '#EEEEEE',
    width: 31,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerHeader: {
    height: 1,
    width: '100%',
    backgroundColor: '#E2E2E2',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  menuFilter: {
    marginLeft: 14,
    width: 140,
    height: 35,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperItemHospital: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 6,
  },
  wrapperInfoItemHospital: {
    flex: 1,
    marginLeft: 10,
  },
  imageItemHospital: {
    width: 77,
    height: 77,
    borderColor: '#DCDEE1',
    borderWidth: 1,
    borderRadius: 11,
    backgroundColor: 'white',
  },
  nameItemHospital: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font.FAMILY_BOLD,
  },
  addressItemHospital: {
    fontSize: 12,
    fontFamily: Font.FAMILY_MEDIUM,
    color: '#969A99',
  },
  wrapperBottomItemHospital: {
    flexDirection: 'row',
  },
  statusItemHospital: {
    backgroundColor: '#FF972E',
    borderRadius: 15,
    width: 46,
    textAlign: 'center',
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 3,
    fontFamily: Font.ROBOTO_BOLD,
  },
  distanceWrapperItemHospital: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  distanceItemHospital: {
    fontSize: 10,
    fontFamily: Font.FAMILY_REGULAR,
    marginLeft: 4,
  },
  wrapperNumberOfServicesItemHospital: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  numberOfServicesItemHospital: {
    fontSize: 10,
    fontFamily: Font.FAMILY_REGULAR,
    color: '#969A99',
    marginLeft: 4,
  },
  button: {
    borderColor: '#FF972E',
    borderRadius: 10,
    paddingVertical: 3,
  },
  titleButton: {
    color: '#FF972E',
    fontSize: 10,
  },
  containerButton: {
    width: 70,
  },
  dividerListHorizontal: {
    height: 17,
    width: '100%',
  },
  headerListHospital: {
    height: 20,
  },
});
