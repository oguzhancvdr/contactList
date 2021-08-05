import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={onChangeText}
        value={value}
        iconPosition="right"
        // error={'This field is required'}
        // keyboardType="numeric"
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        // keyboardType="numeric"
      />
    </Container>
  );
};

export default Login;
