import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import {CONTACT_DETAIL} from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
import {navigate} from '../../navigations/RootNavigator';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

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
      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;

    contactsRef.current = data;

    const newList = contactsRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i.id).includes(item.id),
      );

      navigate(CONTACT_DETAIL, {item: newContact});
    }
  }, [data.length]);

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
