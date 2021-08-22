import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/Modal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'My Profile'}
        modalBody={
          <View>
            <Text>Hello from modal body</Text>
          </View>
        }
        modalFooter={<></>}
      />
      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default ContactsComponent;
