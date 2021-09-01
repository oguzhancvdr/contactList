import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import ImageComponent from './ImageComponent';
import styles from './styles';
import Icon from '../common/Icon';
import CustomButton from '../common/CustomButton';
import {CREATE_CONTACT} from '../../constants/routeNames';

const ContactDetails = ({contact}) => {
  const {navigate} = useNavigation();

  const {contact_picture, first_name, country_code, phone_number, last_name} =
    contact;

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {contact_picture && <ImageComponent src={contact_picture} />}

        <View style={styles.content}>
          <Text style={styles.name}>{first_name + ' ' + last_name} </Text>
        </View>

        <View style={styles.hrLine} />
        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={styles.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View style={styles.iconContainer}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={styles.editBtn}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ContactDetails;
