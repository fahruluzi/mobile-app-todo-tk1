import React from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useRouter } from 'expo-router';
import { useLoginViewModel } from '../viewmodels/LoginViewModel';

const Login: React.FC = () => {
  const router = useRouter();
  const { username, password, error, setUsername, setPassword, handleLogin } = useLoginViewModel();

  const onLoginSuccess = () => {
    router.push('/images');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => handleLogin(onLoginSuccess)}
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
