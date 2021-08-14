import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

const LoginComponent = () => {
  const {navigate} = useNavigation();
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
        <Text style={styles.subTitle}>Please loign here</Text>

        <Message
          primary
          retry
          message="invalid creaditendals"
          retryFn={() => {}}
          onDismiss={() => {}}
        />
        <Message onDismiss={() => {}} danger message="invalid creaditendals" />
        <Message onDismiss={() => {}} info message="invalid creaditendals" />
        <Message onDismiss={() => {}} success message="invalid creaditendals" />

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>SHOW</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
