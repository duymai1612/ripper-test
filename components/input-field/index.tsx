import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { InputFieldProps } from './types';
import { createStyles } from './styles';
import { useTheme } from '../../services/constants/ThemeContext';

const InputField: FC<InputFieldProps> = ({
  label,
  error,
  touched,
  style,
  ...rest
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  
  const hasError = !!error && touched;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          hasError && styles.errorInput,
          style
        ]}
        placeholderTextColor={colors.text + '80'}
        {...rest}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField; 