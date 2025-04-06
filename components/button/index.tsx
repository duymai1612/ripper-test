import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';
import { createStyles } from './styles';
import { useTheme } from '../../services/constants/ThemeContext';

const Button: FC<ButtonProps> = ({
  title,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        fullWidth && styles.fullWidth,
        style,
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text 
        style={[
          styles.buttonText,
          variant === 'secondary' && styles.secondaryText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button; 