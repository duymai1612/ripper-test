import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
} 