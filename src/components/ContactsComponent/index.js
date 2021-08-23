import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AppModal from '../common/Modal';
import Message from '../common/Message';
import colors from '../../assets/theme/colors';

const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="Contacts are not found" />
      </View>
    );
  };
  console.log({data, loading});

  const renderItem = ({item}) => {
    console.log('item: ', item);
    return (
      <TouchableOpacity>
        <Text>Contact</Text>
      </TouchableOpacity>
    );
  };

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
      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {!loading && (
        <FlatList
          renderItem={renderItem}
          data={data}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default ContactsComponent;
