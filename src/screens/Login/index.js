import React, {useState, useContext} from 'react';
import LoginComponent from '../../components/Login';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';

const Login = () => {
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
