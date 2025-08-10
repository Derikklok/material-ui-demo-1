# Maroon Design System

A comprehensive Material UI design system based on maroon colors, built with React and TypeScript.

## 🎨 Color Palette

### Primary Colors (Maroon)
- **Main**: `#e91e63` - Primary maroon for main actions and branding
- **Light**: `#f06292` - Lighter maroon for hover states and secondary elements
- **Dark**: `#c2185b` - Darker maroon for active states and emphasis
- **Full Palette**: 50-900 shades available for various use cases

### Secondary Colors (Green)
- **Main**: `#4caf50` - Complementary green for secondary actions
- **Light**: `#81c784` - Light green for subtle accents
- **Dark**: `#388e3c` - Dark green for emphasis

### Neutral Colors
- **Text Primary**: `#212121` - Main text color
- **Text Secondary**: `#616161` - Secondary text color
- **Background**: `#fafafa` - Page background
- **Paper**: `#ffffff` - Card and component backgrounds

## 🔤 Typography

### Font Family
- **Primary**: Poppins (300, 400, 500, 700 weights)

### Heading Scale
- **H1**: 2.5rem, 700 weight, maroon color
- **H2**: 2rem, 600 weight, maroon color
- **H3**: 1.75rem, 600 weight, maroon color
- **H4**: 1.5rem, 500 weight, maroon color
- **H5**: 1.25rem, 500 weight, maroon color
- **H6**: 1.125rem, 500 weight, maroon color

### Body Text
- **Body1**: 1rem, 400 weight, neutral color
- **Body2**: 0.875rem, 400 weight, neutral color
- **Button**: 0.875rem, 500 weight, no text transform

## 🧩 Component System

### Buttons
- **Contained**: Primary maroon background with white text
- **Outlined**: Maroon border with maroon text
- **Text**: Maroon text with transparent background
- **Hover Effects**: Subtle shadows and color transitions
- **Border Radius**: 8px for modern, friendly appearance

### Cards
- **Border Radius**: 12px for soft, modern look
- **Shadows**: Subtle shadows with hover effects
- **Padding**: Consistent spacing using theme spacing

### Paper Components
- **Border Radius**: 8px for consistency
- **Elevation**: Multiple levels (0-24) for depth

### Form Elements
- **Text Fields**: 8px border radius
- **Focus States**: Maroon accent colors
- **Validation**: Error states with red colors

## 🎯 Usage Examples

### Using Theme Colors
```tsx
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      bgcolor: 'primary.main',        // #e91e63
      color: 'primary.contrastText',  // #ffffff
      p: 2 
    }}>
      <Typography variant="h4">
        This uses the maroon theme
      </Typography>
    </Box>
  );
}
```

### Custom Styling with Theme
```tsx
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function CustomBox() {
  const theme = useTheme();
  
  return (
    <Box sx={{
      bgcolor: 'primary.light',      // #f06292
      borderRadius: theme.shape.borderRadius, // 8px
      p: theme.spacing(2),           // 16px
      boxShadow: theme.shadows[2]    // Subtle shadow
    }}>
      Custom styled content
    </Box>
  );
}
```

### Responsive Design
```tsx
import { Box } from '@mui/material';

function ResponsiveBox() {
  return (
    <Box sx={{
      width: { xs: '100%', sm: '50%', md: '33%' },
      p: { xs: 1, sm: 2, md: 3 }
    }}>
      Responsive content
    </Box>
  );
}
```

## 🚀 Getting Started

### 1. Import Theme
```tsx
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### 2. Use Theme Hooks
```tsx
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  // Access theme values
  console.log(theme.palette.primary.main);
  console.log(theme.typography.h1.fontSize);
  
  return <div>Component content</div>;
}
```

### 3. Custom Styling
```tsx
import { Box } from '@mui/material';

function StyledBox() {
  return (
    <Box sx={{
      // Use theme colors
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      
      // Use theme spacing
      p: 2,        // 16px
      m: 1,        // 8px
      
      // Use theme breakpoints
      width: { xs: '100%', md: '50%' },
      
      // Use theme shadows
      boxShadow: 2,
      
      // Use theme border radius
      borderRadius: 1
    }}>
      Styled content
    </Box>
  );
}
```

## 🎨 Customization

### Adding New Colors
```tsx
// In theme.ts
const customColors = {
  custom: {
    main: '#your-color',
    light: '#your-light-color',
    dark: '#your-dark-color'
  }
};

export const theme = createTheme({
  palette: {
    // ... existing palette
    custom: customColors.custom
  }
});
```

### Modifying Component Styles
```tsx
// In theme.ts
export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Your custom styles
          borderRadius: 12,
          textTransform: 'none'
        }
      }
    }
  }
});
```

### Adding New Typography Variants
```tsx
// In theme.ts
export const theme = createTheme({
  typography: {
    // ... existing typography
    customVariant: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: maroonColors[600]
    }
  }
});
```

## 📱 Responsive Design

The design system includes responsive breakpoints:
- **xs**: 0px and up
- **sm**: 600px and up
- **md**: 900px and up
- **lg**: 1200px and up
- **xl**: 1536px and up

### Responsive Utilities
```tsx
import { Box } from '@mui/material';

function ResponsiveComponent() {
  return (
    <Box sx={{
      // Responsive spacing
      p: { xs: 1, sm: 2, md: 3, lg: 4 },
      
      // Responsive typography
      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
      
      // Responsive layout
      flexDirection: { xs: 'column', md: 'row' },
      
      // Responsive sizing
      width: { xs: '100%', sm: '50%', md: '33%' }
    }}>
      Responsive content
    </Box>
  );
}
```

## 🔧 Development

### Running the Project
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📚 Resources

- [Material UI Documentation](https://mui.com/)
- [Material UI Theme Customization](https://mui.com/material-ui/customization/theme-components/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)
- [Color Theory](https://www.interaction-design.org/literature/topics/color-theory)

## 🤝 Contributing

When contributing to the design system:

1. Follow the existing color palette structure
2. Maintain consistency with typography scale
3. Use theme spacing and breakpoints
4. Test responsive behavior
5. Update documentation for new components

## 📄 License

This project is licensed under the MIT License.
