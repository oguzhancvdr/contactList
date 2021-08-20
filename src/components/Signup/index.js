import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

const RegisterComponent = ({
  onChange,
  onSubmit,
  form,
  loading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  // handlers
  const showPassword = () => setIsSecureEntry(p => !p);
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Contacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message message={error?.error} retry danger retryFn={onSubmit} />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value})}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={value => onChange({name: 'firstName', value})}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter Last name"
            onChangeText={value => onChange({name: 'lastName', value})}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => onChange({name: 'email', value})}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={showPassword}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => onChange({name: 'password', value})}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>{LOGIN}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
