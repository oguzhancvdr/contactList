import React, {useEffect, useContext, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetails from '../../components/ContactDetails';
import {View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage.';
import editContact from '../../context/actions/contacts/editContact';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {setOptions, navigate} = useNavigation();
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);

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

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
    setIsUploading(true);
    uploadImage(image)(url => {
      const {
        first_name: firstName,
        last_name: lastName,
        is_favorite: isFavorite,
        phone_number: phoneNumber,
        country_code: phoneCode,
      } = item;
      editContact(
        {
          firstName,
          lastName,
          isFavorite,
          phoneNumber,
          phoneCode,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)(() => {
        setIsUploading(false);
        setIsSucceed(true);
      });
    })(err => {
      console.log('err in upload func :>> ', err);
      setIsUploading(false);
    });
  };

  return (
    <ContactDetails
      contact={item}
      sheetRef={sheetRef}
      localFile={localFile}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      isUploading={isUploading}
      isSucceed={isSucceed}
    />
  );
};

export default ContactDetail;
