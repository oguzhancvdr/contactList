import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [sortBy, setSortBy] = useState(null);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  const getSettings = async () => {
    const sortPreferences = await AsyncStorage.getItem('sortBy');
    if (sortPreferences) {
      setSortBy(sortPreferences);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, []),
  );

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon
            type="material"
            size={25}
            style={{padding: 10}}
            name="menu"
            color="#78D1DF"
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return <ContactsComponent data={data} loading={loading} sortBy={sortBy} />;
};

export default Contacts;
