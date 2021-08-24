import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import AppModal from '../common/Modal';
import Message from '../common/Message';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';
const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={styles.messageContainer}>
        <Message info message="Contacts are not found" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number} = item;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={styles.profileFrame}
              source={{uri: contact_picture}}
            />
          ) : (
            <View style={styles.emptyImg} />
          )}
          <View>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>
          <Text>{phone_number}</Text>
        </View>
        <Icon name="right" type="ant" />
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
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {!loading && (
        <View style={styles.listContainer}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={styles.footerCompContainer} />}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
