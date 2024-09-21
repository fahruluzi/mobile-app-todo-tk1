import { useState } from 'react';
import { UserModel } from '../models/UserModel';

export const useLoginViewModel = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Handle login validation
  const handleLogin = (onSuccess: () => void) => {
    if (UserModel.validateLogin(username, password)) {
      setError(''); // Clear any previous errors
      onSuccess(); // Trigger navigation on successful login
    } else {
      setError('Incorrect username or password');
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
