import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  loadingIndicator: {
    paddingVertical: 100,
    paddingHorizontal: 100,
  },
  listContainer: {
    paddingVertical: 20,
  },
  footerCompContainer: {
    height: 150,
  },
  emptyImg: {
    width: 45,
    height: 45,
    backgroundColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  profileFrame: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  messageContainer: {
    paddingVertical: 100,
    paddingHorizontal: 100,
    alignItems: 'center',
  },
  contactListContainer: {
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },
  floatingActionButton: {
    backgroundColor: 'red',
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
