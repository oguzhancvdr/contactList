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
    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={styles.profileFrame}
              source={{uri: contact_picture}}
            />
          ) : (
            <View style={styles.emptyImg}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.contactListContainer}>
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
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: colors.grey}} />
            )}
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
