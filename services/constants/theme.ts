export const COLORS = {
  light: {
    primary: '#FF8C38', // Orange color from the Ripper logo
    background: '#FFFFFF',
    text: '#000000',
    card: '#FFFFFF',
    border: '#E0E0E0',
    buttonText: '#FFFFFF',
    disabledButton: '#CCCCCC',
    error: '#FF3B30',
    dateHeader: '#FFF0E3',
    iconBackground: '#FFFFFF',
  },
  dark: {
    primary: '#FF8C38', // Keep the brand color consistent
    background: '#121212',
    text: '#FFFFFF',
    card: '#2A2A2A',
    border: '#333333',
    buttonText: '#FFFFFF',
    disabledButton: '#666666',
    error: '#FF453A',
    dateHeader: '#333333',
    iconBackground: '#FFFFFF',
  }
};

export const FONT_SIZES = {
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 24,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 999,
};

export type Theme = 'light' | 'dark'; 