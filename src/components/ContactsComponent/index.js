import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {CREATE_CONTACT} from '../../constants/routeNames';
import Message from '../common/Message';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';

const ContactsComponent = ({data, loading, sortBy}) => {
  const {navigate} = useNavigation();
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
                {first_name?.[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name?.[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.name, {marginRight: 5}]}>{first_name}</Text>
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
    <>
      <View style={styles.contactListContainer}>
        {loading && (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
        {!loading && (
          <View style={styles.listContainer}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? data?.sort((a, b) => {
                      if (sortBy === 'First Name') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                      if (sortBy === 'Last Name') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
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
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" color={colors.white} size={21} type="ant" />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
