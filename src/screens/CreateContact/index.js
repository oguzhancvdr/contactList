import React, {useState, useContext, useRef, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CreateContactComponent from '../../components/CreateContact';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage.';
import countryCodes from '../../utils/countryCodes';
import editContact from '../../context/actions/contacts/editContact';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);
  const {navigate, setOptions} = useNavigation();
  const {params} = useRoute();
  const sheetRef = useRef(null);

  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Update contact'});

      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params?.contact;

      setForm(prev => {
        return {
          ...prev,
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          phoneCode: countryCode,
        };
      });

      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === countryCode;
      });

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            countryCode: country.flag.toUpperCase(),
          };
        });
      }

      if (params?.contact?.contact_picture) {
        setLocalFile(params?.contact?.contact_picture);
      }
    }
  }, []);

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

  const onFileSelected = images => {
    closeSheet();
    setLocalFile(images);
  };

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (params?.contact) {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);
          editContact(
            {...form, contactPicture: url},
            params?.contact?.id,
          )(contactsDispatch)(item => navigate(CONTACT_DETAIL, {item}));
        })(err => {
          if (err) {
            setIsUploading(false);
          }
        });
      } else {
        editContact(form, params?.contact?.id)(contactsDispatch)(item => {
          navigate(CONTACT_DETAIL, {item});
        });
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST);
            },
          );
        })(err => {
          if (err) {
            setIsUploading(false);
          }
        });
      } else {
        createContact(form)(contactsDispatch)(() => navigate(CONTACT_LIST));
      }
    }
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
      loading={loading || isUploading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
