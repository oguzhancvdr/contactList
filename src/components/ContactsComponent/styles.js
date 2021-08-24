import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
});
