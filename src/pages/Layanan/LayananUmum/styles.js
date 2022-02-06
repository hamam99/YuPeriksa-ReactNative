import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  },
});
