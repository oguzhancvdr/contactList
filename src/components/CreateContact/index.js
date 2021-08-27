import React from 'react';
import {Image, View, Text, Switch, TouchableOpacity} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general.js';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  onChangeText,
  form,
  setForm,
  onSubmit,
  toggleValueChange,
  loading,
  error,
  sheetRef,
  openSheet,
  closeSheet,
}) => {
  const onSelect = v => {
    const phoneCode = v.callingCode[0];
    const cCode = v.cca2;
    setForm({...form, countryCode: cCode, phoneCode});
  };

  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: DEFAULT_IMAGE_URI}}
          width={150}
          height={150}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Enter a first name"
          onChangeText={value =>
            onChangeText({name: 'firstName', value: value})
          }
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last name"
          placeholder="Enter a last name"
          onChangeText={value => onChangeText({name: 'lastName', value: value})}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCodeButton
              withAlphaFilter
              withCallingCode
              withEmoji
              onSelect={v => onSelect(v)}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          onChangeText={value =>
            onChangeText({name: 'phoneNumber', value: value})
          }
          label="Phone number"
          placeholder="Enter a phone number"
          error={error?.phone_number?.[0]}
        />
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Add to favorite</Text>
          <Switch
            trackColor={{false: '#3e3e3e', true: colors.primary}}
            thumbColor="#ffffff"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>
      <ImagePicker ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponent;
