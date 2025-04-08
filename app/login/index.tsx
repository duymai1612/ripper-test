import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTheme } from '../../services/constants/ThemeContext';
import { createStyles } from './styles';
import InputField from '../../components/input-field';
import Button from '../../components/button';
import { useToast } from '../../services/constants/ToastContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const Login: FC = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { showToast } = useToast();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // Navigate to Home screen
      navigation.navigate('Home');
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = formik;
  const isButtonEnabled = values.email !== '' && values.password !== '';

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Log In</Text>
      </View>

      <View style={styles.form}>
        <InputField
          label="Email"
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
        />

        <InputField
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            onPress={() => {
              if (!isValid && values.email) {
                showToast(errors.email || 'Invalid email format', 'error');
              } else {
                handleSubmit();
              }
            }}
            disabled={!isButtonEnabled}
            fullWidth
          />
        </View>
      </View>
    </View>
  );
};

export default Login; 