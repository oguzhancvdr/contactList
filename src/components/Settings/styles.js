import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  settingsContainer: {
    backgroundColor: colors.white,
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  settingsTitle: {
    fontSize: 17,
  },
  settingsSubTitle: {
    fontSize: 14,
    color: colors.grey,
    paddingTop: 5,
  },
  fakeView: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
});
