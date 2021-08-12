import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  onChangeText,
  value,
  icon,
  style,
  label,
  iconPosition,
  error,
  ...props // it should be at the last step
}) => {
  const [isFocused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (isFocused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text> {label} </Text>}
      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
            alignItems: icon ? 'center' : 'baseline',
          },
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
