import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  AppBar,
  Toolbar,
  Stack,
  Divider
} from '@mui/material';
import {
  Security,
  Speed,
  Visibility,
  Support,
  Login,
  PersonAdd,
  Dashboard,
  Description
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Secure & Trusted',
      description: 'Government-grade security with end-to-end encryption and secure authentication.'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Fast & Efficient',
      description: 'Streamlined processes that save time for both citizens and government officers.'
    },
    {
      icon: <Visibility sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Transparent',
      description: 'Real-time tracking and updates on all service requests and applications.'
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your government service needs.'
    }
  ];

  const services = [
    'Birth Certificate',
    'Marriage Registration',
    'Property Documents',
    'Business Licenses',
    'Tax Services',
    'Healthcare Services',
    'Education Services',
    'Transport Services'
  ];

  return (
    <Box>
      {/* Navigation */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}>
            GovService Hub
          </Typography>
          <Stack direction="row" spacing={2}>
            {user ? (
              <Button 
                variant="contained" 
                startIcon={<Dashboard />}
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button 
                  variant="outlined" 
                  startIcon={<Login />}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button 
                  variant="contained" 
                  startIcon={<PersonAdd />}
                  onClick={() => navigate('/register')}
                >
                  Register
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4, 
            alignItems: 'center' 
          }}>
            <Box>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Centralized Government Services
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Access all government services in one place. Fast, secure, and transparent.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'grey.100' }
                  }}
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </Button>
              </Stack>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                height: 300
              }}
            >
              <Description sx={{ fontSize: 200, opacity: 0.3 }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose GovService Hub?
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 4 
        }}>
          {features.map((feature, index) => (
            <Box key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center',
                  '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s ease' }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Available Services
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3 
          }}>
            {services.map((service, index) => (
              <Box key={index}>
                <Paper 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': { 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      transform: 'scale(1.05)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Typography variant="h6">
                    {service}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of citizens and government officers using our platform
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'secondary.main',
                  '&:hover': { bgcolor: 'grey.100' }
                }}
                onClick={() => navigate('/register')}
              >
                Create Account
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white', 
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                }}
                onClick={() => navigate('/login')}
              >
                Sign In Now
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4 
          }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                GovService Hub
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Centralized government services for citizens and officers.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
                {user && <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>}
              </Stack>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Email: support@govservice.gov<br />
                Phone: 1-800-GOV-SERV<br />
                Hours: 24/7 Support
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 3, borderColor: 'grey.700' }} />
          <Typography variant="body2" textAlign="center" sx={{ opacity: 0.6 }}>
            © 2024 GovService Hub. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
