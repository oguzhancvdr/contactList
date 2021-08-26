import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general.js';

const CreateContactComponent = ({
  onChangeText,
  form,
  setForm,
  onSubmit,
  loading,
  error,
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
        <Text style={styles.chooseText}>Choose image</Text>
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

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
