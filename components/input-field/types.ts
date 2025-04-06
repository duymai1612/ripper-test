import { TextInputProps } from 'react-native';

export interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
} 