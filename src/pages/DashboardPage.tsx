import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  AppBar,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Chip,
  Badge,
  Tabs,
  Tab,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search,
  Dashboard as DashboardIcon,
  Person,
  Logout,
  Notifications,
  Menu as MenuIcon,
  Description,
  Assignment,
  Add,
  Settings,
  Assessment
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'available' | 'pending' | 'processing' | 'completed' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  citizenName?: string;
}

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, logout } = useAuth();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Mock data for services
  const [services] = useState<Service[]>([
    {
      id: '1',
      name: 'Birth Certificate',
      description: 'Apply for a new birth certificate or request a copy',
      category: 'Identity Documents',
      status: 'available',
      priority: 'medium',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Marriage Registration',
      description: 'Register your marriage with the government',
      category: 'Family Services',
      status: 'pending',
      priority: 'high',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-12',
      citizenName: 'John Doe'
    },
    {
      id: '3',
      name: 'Property Tax Payment',
      description: 'Pay your annual property taxes online',
      category: 'Tax Services',
      status: 'processing',
      priority: 'high',
      createdAt: '2024-01-08',
      updatedAt: '2024-01-14',
      assignedTo: 'Officer Smith'
    },
    {
      id: '4',
      name: 'Business License',
      description: 'Apply for a new business license or renewal',
      category: 'Business Services',
      status: 'completed',
      priority: 'medium',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15'
    },
    {
      id: '5',
      name: 'Healthcare Card',
      description: 'Apply for government healthcare coverage',
      category: 'Healthcare',
      status: 'rejected',
      priority: 'high',
      createdAt: '2024-01-05',
      updatedAt: '2024-01-13',
      citizenName: 'Jane Smith'
    },
    {
      id: '6',
      name: 'Driver License Renewal',
      description: 'Renew your driver license online',
      category: 'Transport',
      status: 'available',
      priority: 'low',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    }
  ]);

  const categories = ['all', 'Identity Documents', 'Family Services', 'Tax Services', 'Business Services', 'Healthcare', 'Transport', 'Education'];
  const statuses = ['all', 'available', 'pending', 'processing', 'completed', 'rejected'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || service.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'success';
      case 'pending': return 'warning';
      case 'processing': return 'info';
      case 'completed': return 'success';
      case 'rejected': return 'error';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderServiceCard = (service: Service) => (
    <Box 
      key={service.id}
      sx={{ 
        width: { xs: '100%', sm: '50%', md: '33.333%' },
        p: 1
      }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s ease' }
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {service.name}
            </Typography>
            <Chip 
              label={service.status} 
              color={getStatusColor(service.status) as any}
              size="small"
            />
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {service.description}
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Chip 
              label={service.category} 
              variant="outlined" 
              size="small"
              sx={{ borderColor: 'primary.main', color: 'primary.main' }}
            />
            <Chip 
              label={service.priority} 
              color={getPriorityColor(service.priority) as any}
              size="small"
            />
          </Box>

          {service.citizenName && (
            <Typography variant="caption" color="text.secondary">
              Applicant: {service.citizenName}
            </Typography>
          )}
          
          {service.assignedTo && (
            <Typography variant="caption" color="text.secondary" display="block">
              Assigned to: {service.assignedTo}
            </Typography>
          )}
        </CardContent>
        
        <CardActions>
          {user?.role === 'officer' || user?.role === 'admin' ? (
            <Button size="small" variant="outlined" startIcon={<Assignment />}>
              Process
            </Button>
          ) : (
            <Button size="small" variant="contained" startIcon={<Add />}>
              Apply
            </Button>
          )}
          <Button size="small" variant="text">
            View Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );

  const renderSidebar = () => (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          GovService Hub
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem component="button">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary="My Applications" />
        </ListItem>
        {user?.role === 'officer' || user?.role === 'admin' ? (
          <ListItem component="button">
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Assigned Tasks" />
          </ListItem>
        ) : null}
        <ListItem component="button">
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {renderSidebar()}
      </Drawer>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box sx={{ width: 250, flexShrink: 0 }}>
          <Paper sx={{ height: '100vh', borderRadius: 0 }}>
            {renderSidebar()}
          </Paper>
        </Box>
      )}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Top App Bar */}
        <AppBar position="static" elevation={1} sx={{ bgcolor: 'background.paper' }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 2, color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
              Dashboard
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton color="primary">
                <Badge badgeContent={3} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              
              <Button
                onClick={(e) => setAnchorEl(e.currentTarget)}
                startIcon={<Avatar sx={{ width: 24, height: 24, fontSize: '0.875rem' }}>
                  {user?.name?.charAt(0)}
                </Avatar>}
                sx={{ color: 'text.primary' }}
              >
                {user?.name}
              </Button>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <Person sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <Settings sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {/* Welcome Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
              Welcome back, {user?.name}!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user?.role === 'officer' || user?.role === 'admin' 
                ? 'Manage and process government service requests'
                : 'Track your government service applications and apply for new services'
              }
            </Typography>
          </Box>

          {/* Quick Stats */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3, 
            mb: 4 
          }}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="primary.main" gutterBottom>
                {services.filter(s => s.status === 'pending').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pending Requests
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="secondary.main" gutterBottom>
                {services.filter(s => s.status === 'processing').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Progress
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="success.main" gutterBottom>
                {services.filter(s => s.status === 'completed').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completed
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="info.main" gutterBottom>
                {services.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Services
              </Typography>
            </Paper>
          </Box>

          {/* Tabs */}
          <Paper sx={{ mb: 3 }}>
            <Tabs value={selectedTab} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tab label="All Services" />
              <Tab label="My Applications" />
              {user?.role === 'officer' || user?.role === 'admin' ? (
                <Tab label="Assigned Tasks" />
              ) : null}
              <Tab label="Favorites" />
            </Tabs>
          </Paper>

          {/* Search and Filters */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
              gap: 2, 
              alignItems: 'center' 
            }}>
              <TextField
                fullWidth
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                select
                fullWidth
                label="Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                label="Status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : status}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          {/* Services Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3 
          }}>
            {filteredServices.length > 0 ? (
              filteredServices.map(renderServiceCard)
            ) : (
              <Box sx={{ gridColumn: '1 / -1' }}>
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    No services found
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try adjusting your search criteria or filters
                  </Typography>
                </Paper>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardPage;
