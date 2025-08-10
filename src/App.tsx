import { Send, Email, Phone, LocationOn } from "@mui/icons-material";
import { 
  Button, 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Paper,
  Stack,
  Divider
} from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h1" gutterBottom>
          Maroon Design System
        </Typography>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Built with Material UI
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A comprehensive design system based on maroon colors
        </Typography>
      </Box>

      {/* Color Palette Showcase */}
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Color Palette
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h6" gutterBottom>Primary (Maroon)</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Box
                  key={shade}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    bgcolor: `primary.${shade === 500 ? 'main' : shade === 50 ? '50' : shade}`,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: shade <= 300 ? 'text.primary' : 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {shade}
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>Secondary (Green)</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Box
                  key={shade}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    bgcolor: `secondary.${shade === 500 ? 'main' : shade === 50 ? '50' : shade}`,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: shade <= 300 ? 'text.primary' : 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {shade}
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>Neutral</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Box
                  key={shade}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    bgcolor: `grey.${shade}`,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: shade <= 300 ? 'text.primary' : 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {shade}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Component Showcase */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Buttons
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained">Primary Button</Button>
              <Button variant="outlined">Secondary Button</Button>
              <Button variant="text">Text Button</Button>
              <Button variant="contained" endIcon={<Send/>}>
                Send Email
              </Button>
            </Stack>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Typography
            </Typography>
            <Typography variant="h1" gutterBottom>H1 Heading</Typography>
            <Typography variant="h2" gutterBottom>H2 Heading</Typography>
            <Typography variant="h3" gutterBottom>H3 Heading</Typography>
            <Typography variant="body1" gutterBottom>
              This is body text with the Poppins font family.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Contact Section */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
          <Box textAlign="center">
            <Email sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>Email</Typography>
            <Typography variant="body2" color="text.secondary">
              hello@example.com
            </Typography>
          </Box>
          <Box textAlign="center">
            <Phone sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>Phone</Typography>
            <Typography variant="body2" color="text.secondary">
              +1 (555) 123-4567
            </Typography>
          </Box>
          <Box textAlign="center">
            <LocationOn sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>Address</Typography>
            <Typography variant="body2" color="text.secondary">
              123 Design Street<br />
              Creative City, CC 12345
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
