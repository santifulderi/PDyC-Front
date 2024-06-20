import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#f5f7ff',
    100: '#e3e9ff',
    200: '#c5c8ff',
    300: '#a7a8ff',
    400: '#8888ff',
    500: '#6666e6', // Primary color
    600: '#5252b4',
    700: '#3d3d82',
    800: '#282850',
    900: '#14141e',
  },
  gray: {
    50: '#f7fafc',
    100: '#edf2f7',
    200: '#e2e8f0',
    300: '#cbd5e0',
    400: '#a0aec0',
    500: '#718096',
    600: '#4a5568',
    700: '#2d3748',
    800: '#1a202c',
    900: '#171923',
  },
};

const styles = {
  global: {
    body: {
      bg: 'gray.900',
      color: 'gray.50',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    variants: {
      primary: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
        },
      },
      secondary: {
        bg: 'gray.700',
        color: 'white',
        _hover: {
          bg: 'gray.600',
        },
      },
    },
  },
};

const theme = extendTheme({ colors, styles, components });

export default theme;
