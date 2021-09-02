import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetails from '../../components/ContactDetails';
import {View, TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {setOptions} = useNavigation();

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
            <TouchableOpacity style={{paddingLeft: 10}}>
              <Icon
                name="delete"
                type="material"
                size={25}
                color={colors.grey}
              />
            </TouchableOpacity>
          </View>
        ),
      });
    }
  }, [item]);

  return <ContactDetails contact={item} />;
};

export default ContactDetail;
