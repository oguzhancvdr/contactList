import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general.js';

const CreateContactComponent = () => {
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
        <Input label="First name" placeholder="Enter a first name" />
        <Input label="Last name" placeholder="Enter a last name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withAlphaFilter
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          label="Phone number"
          placeholder="Enter a phone number"
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
