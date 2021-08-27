import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import CreateContactComponent from '../../components/CreateContact';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  
  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  
  const onSubmit = () => {
    console.log('form :>> ', form);
    createContact(form)(contactsDispatch)(() => navigate(CONTACT_LIST));
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
    />
  );
};

export default CreateContact;
