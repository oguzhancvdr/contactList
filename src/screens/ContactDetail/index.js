import React, {useEffect, useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetails from '../../components/ContactDetails';
import {View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {navigate} from '../../navigations/RootNavigator';
import {CONTACT_LIST} from '../../constants/routeNames';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {setOptions} = useNavigation();

  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => (
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <TouchableOpacity>
              <Icon
                name={item.is_favorite ? 'star' : 'star-border'}
                type="material"
                color={colors.grey}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => {
                Alert.alert(
                  'Delete!',
                  `Are you sure you want to delete ${
                    item.first_name + ' ' + item.last_name
                  }?`,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        deleteContact(item.id)(contactsDispatch)(() => {
                          navigate(CONTACT_LIST);
                        });
                      },
                    },
                  ],
                );
              }}>
              {loading ? (
                <ActivityIndicator size="small" color={colors.primary} />
              ) : (
                <Icon
                  name="delete"
                  type="material"
                  size={25}
                  color={colors.grey}
                />
              )}
            </TouchableOpacity>
          </View>
        ),
      });
    }
  }, [item, loading]);

  return <ContactDetails contact={item} />;
};

export default ContactDetail;
