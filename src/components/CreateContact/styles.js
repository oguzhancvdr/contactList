import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  chooseText: {
    color: colors.primary,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 17,
  },
});
