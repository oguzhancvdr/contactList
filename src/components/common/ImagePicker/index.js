import React, {forwardRef} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';

const ImagePicker = forwardRef(({}, ref) => {
  const opitons = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" type="ant" size={22} color={colors.grey} />,
      onPress: () => {},
    },
    {
      name: 'Choose from galery',
      icon: <Icon name="image" type="material" size={22} color={colors.grey} />,
      onPress: () => {},
    },
  ];
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown
      height={200}
      openDuration={250}
      customStyles={{
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {opitons.map(({name, onPress, icon}) => (
          <TouchableOpacity
            style={styles.pickerOption}
            key={name}
            onPress={onPress}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
