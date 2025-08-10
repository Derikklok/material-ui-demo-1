import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Login as LoginIcon,
  ArrowBack
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  const handleDemoLogin = async (role: 'admin' | 'officer' | 'citizen') => {
    setError('');
    setSuccess('');
    
    let email = '';
    let password = '';
    
    switch (role) {
      case 'admin':
        email = 'admin@government.gov';
        password = 'admin123';
        break;
      case 'officer':
        email = 'officer@government.gov';
        password = 'officer123';
        break;
      case 'citizen':
        email = 'citizen@example.com';
        password = 'citizen123';
        break;
    }
    
    setFormData({ email, password });
    
    try {
      const success = await login(email, password);
      if (success) {
        setSuccess('Demo login successful! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    } catch (err) {
      setError('Demo login failed');
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        bgcolor: 'grey.50',
        display: 'flex',
        alignItems: 'center',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        {/* Back Button */}
        <Box sx={{ mb: 3 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{ color: 'text.secondary' }}
          >
            Back to Home
          </Button>
        </Box>

        {/* Login Form */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in to access your government services
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="email"
              autoFocus
            />
            
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              startIcon={isLoading ? <CircularProgress size={20} /> : <LoginIcon />}
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <Box textAlign="center" sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/register" sx={{ fontWeight: 'bold' }}>
                Sign up here
              </Link>
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              OR
            </Typography>
          </Divider>

          {/* Demo Login Buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 2 }}>
              Try demo accounts:
            </Typography>
            
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleDemoLogin('admin')}
              disabled={isLoading}
              sx={{ borderColor: 'primary.main', color: 'primary.main' }}
            >
              Demo Admin
            </Button>
            
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleDemoLogin('officer')}
              disabled={isLoading}
              sx={{ borderColor: 'secondary.main', color: 'secondary.main' }}
            >
              Demo Officer
            </Button>
            
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleDemoLogin('citizen')}
              disabled={isLoading}
              sx={{ borderColor: 'grey.500', color: 'grey.700' }}
            >
              Demo Citizen
            </Button>
          </Box>
        </Paper>

        {/* Footer */}
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 GovService Hub. Secure government services.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
