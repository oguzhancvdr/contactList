import React from 'react';
import {useRoute} from '@react-navigation/native';
import ContactDetails from '../../components/ContactDetails';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();

  return <ContactDetails contact={item} />;
};

export default ContactDetail;
