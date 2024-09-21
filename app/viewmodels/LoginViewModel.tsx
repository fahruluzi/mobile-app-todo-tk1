import { useState } from 'react';
import { UserModel } from '../models/UserModel';

export const useLoginViewModel = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = (onSuccess: () => void) => {
    if (UserModel.validateLogin(username, password)) {
      setError('');
      onSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

  return {
    username,
    password,
    error,
    setUsername,
    setPassword,
    handleLogin,
  };
};
