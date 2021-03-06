import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  detailImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  loading: {
    paddingLeft: '35%',
    paddingTop: '5%',
  },
  name: {
    fontSize: 23,
  },
  content: {
    paddingLeft: 20,
  },
  hrLine: {
    height: 10,
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
  },
  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  topCallOption: {
    alignItems: 'center',
  },

  middleText: {
    fontSize: 14,
    color: colors.primary,
    paddingVertical: 5,
  },

  middleCallOptions: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  phoneMobile: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBtn: {alignSelf: 'flex-end', marginRight: 20, width: 200},
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
